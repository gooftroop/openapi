import OpenApiSchema from 'v3/definitions/schema/openApi';

// RegExp to determine if an input is a OpenAPI Specification Extension
const SPECIFICATION_EXTENSION_MATCH: RegExp = new RegExp(/^x-.*/, 'g');

/**
 * [definition description]
 * @type {[type]}
 */
export default class AbstractSchemaRule {
  context: OpenApiSchema;
  valid: boolean;

  /**
   * [constructor description]
   * @param  {[type]} definitions [description]
   * @return {[type]}             [description]
   */
  constructor(context: OpenApiSchema) {
    if (context == null) {
      throw new Error("'context' is required");
    }

    this.valid = true;
    this.context = context;
  }

  /**
   * [report description]
   * @param  {[type]} error [description]
   * @return {[type]}       [description]
   */
  report(error: Error): void {
    this.valid = false;
    console.error(error);
    return null;
  }

  /**
   * [validate description]
   * @param  {[type]} definition [description]
   * @return {[type]}            [description]
   */
  validate(definitions: Object): void {
    throw new Error("'validate' must be implemented");
  }
}

/**
 * [definition description]
 * @type {[type]}
 */
export class AbstractSchemaFieldRule extends AbstractSchemaRule {
  // TODO probably best just to make these scoped rather than a class
  /**
   * [key description]
   * @type {[type]}
   */
  isRef(definition: any): boolean {
    return (typeof definition !== 'object' && '$ref' in definition);
  }

  /**
   * [definition description]
   * @type {[type]}
   */
  resolveRef(definition: string): ?Object {
    return this.context.components.resolve(definition);
  }
}

/**
 * [definition description]
 * @type {[type]}
 */
export class SchemaFieldRule extends AbstractSchemaFieldRule {

  /**
   * [key description]
   * @type {[type]}
   */
  isSpecificationExtension(key: string): boolean {
    return SPECIFICATION_EXTENSION_MATCH.test(key);
  }

  /**
   * [validate description]
   * @param  {[type]} definition [description]
   * @return {[type]}            [description]
   */
  validate(definitions: Object): void {
    let rule: Object;
    const metaData: Object = this.getMeta();

    for (const [key: string, definition: any] of definitions.entries()) {

      if (this.isSpecificationExtension(key)) {
        this[key] = definition;
      } else if (!(key in metaData) ) {
        this.report(new Error(`Illegal field provided: '${key}'`));
      } else if (this.isRef(definition)) {
        this[key] = this.resolveRef(definition.$ref);
      } else {
        rule = metaData[key];
        const error: ?Error = rule.validate(definition);
        if (error) {
          this.report(error);
          this[key] = error;
        } else {
          this[key] = definition;
        }
      }
    }

    if (this.valid) {
      const error: ?Error = this.validateState(definition, this);

      if (error) {
        this.report(error);
      }
    }
  }

  /**
   * [definition description]
   * @type {[type]}
   */
  // eslint-disable-next-line no-unused-vars
  validateState(definition: any, state: OpenApiSchema): ?Error {
    throw new Error("'validateState' must be implemented");
  }
}

/**
 * [definition description]
 * @type {[type]}
 */
export class PrimitiveFieldRule extends AbstractSchemaRule {

  /**
   * [validate description]
   * @param  {[type]} definition [description]
   * @return {[type]}            [description]
   */
  validate(definitions: any): ?Error {
    const metaData: Object = this.getMeta();

    if (!(key in metaData) ) {
      this.report(new Error(`Illegal field provided: '${key}'`));
    } else {
      const error: ?Error = this.validateDefinition(definition);
      if (error) {
        return error;
      }

      this[key] = definition;
      return null;
    }
  }

  /**
   * [definition description]
   * @type {[type]}
   */
  validateDefinition(definition: any): Error {
    throw new Error("'validateDefinition' must be implemented");
  }
}

/**
 * [candidate description]
 * @type {[type]}
 */
export class CollectionFieldRule extends AbstractSchemaFieldRule {

  /**
   * [validateCollectionValue description]
   * @param  {[type]} candidateType [description]
   * @param  {[type]} targetType    [description]
   * @return {[type]}               [description]
   */
  validateCollectionValue(candidate: any, targetType: any): ?Error {
    let error: ?Error = null;
    let rule: Object;

    const candidateType: string = (typeof candidate);

    switch(candidateType) {
      case 'object':
        if (typeof targetType !== 'function') {
          error = new Error(
            `Illegal definition. An unexpected definition map was provided. \
            The expected definition type is ${targetType}`
          );
        } else {
          // TODO handle $refs!!!!!!
          rule = new targetType();
          error = rule.validate(definition);
        }
        break;
      default:
        if (candidateType !== targetType) {
          error = new Error(
            `Illegal definition. Expecting definition type '${targetType}', but found '${candidateType}' instead`
          );
        }
        break;
    }

    return error;
  }
}
