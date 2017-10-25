import Encoding from './encodings';

/**
 * [encodings description]
 * @type {[type]}
 */
export default class Encodings {
  encodings: Object<string, Encoding> = {};

  /**
   * [definitions description]
   * @type {[type]}
   */
  constructor(definitions: Object<string, Object> = {}): void {
    for (const [key: string, definition: Object] of definitions.entries()) {
      this.encodings[key] = new Encoding(definition);
    }
  }
}
