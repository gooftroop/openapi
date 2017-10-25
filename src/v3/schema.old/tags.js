import Tag from './tags';

/**
 *
 */
export default class Tags {
  tags: Array<Tag> = [];

  /**
   * [definitions description]
   * @type {[type]}
   */
  constructor(definitions: Array<Object> = []): void {
    this.tags = definitions.map((definition) => {
      return new Tag(definition);
    });
  }
}
