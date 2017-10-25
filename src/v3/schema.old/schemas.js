import Schema from './schema';

/**
 * [callbacks description]
 * @type {[type]}
 */
export default class Schemas {
  schemas: Object<string, Schema> = {};

  /**
   * [constructor description]
   * @param  {[type]} definitions [description]
   * @return {[type]}             [description]
   */
  constructor(definitions: Object<string, Object> = {}): void {
    for (const [key: string, definition: Object] of definitions.entries()) {
      this.schemas[key] = new Schema(definition);
    }
  }
}
