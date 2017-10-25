import Rule from '../validation/rule';
import Components from './schema/components';

const SPECIFICATION_EXTESNION_MATCH: RegExp = new RegExp(/^x-.*/, 'g');

/**
 * [definition description]
 * @type {[type]}
 */
export default class OpenApiSchema {
  valid: boolean = false;
  context: Components;

  /**
  * [constructor description]
  * @param  {[type]} definitions [description]
  * @return {[type]}             [description]
  */
  constructor(definitions: Object, context: Components) {
    if (!context) {
      throw new Error("'context' is required");
    }

    this.context = context;
    this.validateAndApply(definitions);
  }

  /**
  * [key description]
  * @type {[type]}
  */
  isRef(definition: any): boolean {
    // TODO this is suboptimal - figure out a better way to determine if a field contains a $ref without doing the
    // function call and (maybe) typeof
    if (typeof definition !== 'object' && '$ref' in definition) {
      return true;
    }

    return false;
  }

  /**
  * [key description]
  * @type {[type]}
  */
  isSpecificationExtension(key: string): boolean {
    return SPECIFICATION_EXTESNION_MATCH.test(key);
  }
  /**
  * [definition description]
  * @type {[type]}
  */
  resolveRef(definition: string): ?Object {
    // Split the definition path into keys since a definition path represents an access path inside the Component object
    // TODO move into Component itself
    const keys: Array<string> = definition.replace('#/', '').split('/');
    let key: string;
    let currSchemaInst: Object = this.context;

    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      if (!(key in currSchemaInst)) {
        return null;
      }
      currSchemaInst = currSchemaInst[key];
    }
    return currSchemaInst;
  }

  /**
  * [validate description]
  * @param  {[type]} definition [description]
  * @return {[type]}            [description]
  */
  validateAndApply(definitions: Object): Object {
    const rules: Object = this.getRules();
    let rule: Rule | Function;
    for (const [key: string, definition: any] of definitions.entries()) {
      rule = rules[key];

      if (this.isSpecificationExtension(key)) {
        this[key] = definition;
      } else if (this.isRef(definition)) {
        const $ref = definition.$ref;
        const SchemaInst: ?OpenApiSchema = this.resolveRef($ref);

        this[key] = SchemaInst;
      } else if (!(key in this) ) {
        rule.report(new Error(`Illegal field provided: '${key}'`));
      } else {
        this[key] = rule.runValidateDefinition(definition, this.context);
      }
    }

    rule.runValidateState(validatedDefinitions);
    return validatedDefinitions;
  }
}
