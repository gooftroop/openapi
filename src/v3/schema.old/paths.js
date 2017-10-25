import PathItem from './pathItem';

/**
 * [definion description]
 * @type {[type]}
 */
export default class Paths {
  paths: Array<PathItem> = [];

  /**
   * [definitions description]
   * @type {[type]}
   */
  constructor(definitions: Array<Object>): void {
    this.paths = definitions.map((definition: Object) => {
      return new PathItem(definition);
    });
  }
}
