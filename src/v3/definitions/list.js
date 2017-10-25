import OpenApiSchema from 'v3/definitions/schema/openApi';
import { CollectionFieldRule } from 'v3/definitions';

/**
 * [keyType description]
 * @type {[type]}
 */
export default class ListRule extends CollectionFieldRule {

  itemType: string | Function;
  collection: Array<any>;

  /**
   * [constructor description]
   * @param  {[type]} itemType [description]
   * @param  {[type]} context  [description]
   * @return {[type]}          [description]
   */
  constructor(itemType: string | Function, context: OpenApiSchema): void {
    if (itemType == null) {
        throw new Error("'valueType' is required");
    }

    if (typeof itemType !== 'string') {
      throw new Error(
        `Invalid type provided for 'valueType'. Expected 'string' or 'function', but found ${typeof valueType} instead`
      );
    }

    super(context);

    this.itemType = itemType;
    this.collection = [];
  }

  /**
   * [validate description]
   * @param  {[type]} definition [description]
   * @return {[type]}            [description]
   */
  validate(definitions: Array<any>): void {
    let definition: any;
    let error: ?Error;

    for (let i = 0; i < definitions.length; i++) {
      definition = definitions[i];

      error = this.validateCollectionValue(definition, this.itemType);

      if (error) {
        this.collection.push(error);
        return this.report(error);
      }

      this.collection.push(definition);
      return null;
    }
  }
}
