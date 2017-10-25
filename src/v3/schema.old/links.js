import Link from './links';

/**
 * [allowReserved description]
 * @type {[type]}
 */
export default class Links {
  links: Object<string, Link> = {};

  /**
   * [constructor description]
   * @param  {[type]} definitions [description]
   * @return {[type]}             [description]
   */
  constructor(definitions: Object<string, Object> = {}): void {
    for (const [key: string, definition: Object] of definitions.entries()) {
      this.links[key] = new Link(definition);
    }
  }
}
