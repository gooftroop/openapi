import OpenApiSchema from 'v3/definitions/schema/openApi';
import { CollectionFieldRule } from 'v3/definitions';

/**
 * [keyType description]
 * @type {[type]}
 */
export default class MapRule extends CollectionFieldRule {

  keyType: string;
  map: Object<string, any>;
  valueType: string | Function;

  /**
   * [constructor description]
   * @param  {[type]} keyType   [description]
   * @param  {[type]} valueType [description]
   * @param  {[type]} context   [description]
   * @return {[type]}           [description]
   */
  constructor(keyType: string, valueType: string | Function, context: OpenApiSchema): void {
    if (keyType == null) {
      throw new Error("'keyType' is required");
    }

    if (typeof keyType !== 'string') {
      throw new Error(
        `Invalid type provided for 'keyType'. Expected 'string', but found ${typeof keyType} instead`
      );
    }

    if (valueType == null) {
        throw new Error("'valueType' is required");
    }

    const typeOfValueType: string = typeof this.valueType;
    if (typeOfValueType !== 'string' && typeOfValueType !== 'function') {
      throw new Error(
        `Invalid type provided for 'valueType'. Expected 'string' or 'function', but found ${typeOfValueType} instead`
      );
    }

    super(context);

    this.keyType = keyType;
    this.valueType = valueType;
    this.map = {};
  }

  /**
   * [validate description]
   * @param  {[type]} definition [description]
   * @return {[type]}            [description]
   */
  validate(definitions: Object): void {
    let error: ?Error;

    for (const [key: string, definition: any] of definitions.entries()) {
      if (typeof key !== this.keyType) {
        error = new Error(`Illegal key value found. Expecting type ${this.keyType}, but found ${typeof key} instead`);
      } else {
        error = this.validateCollectionValue(definition, this.valueType);
      }

      if (error) {
        this[key] = error;
        return this.report(error);
      }

      this.map[key] = definition;
      return null;
    }
  }
}
