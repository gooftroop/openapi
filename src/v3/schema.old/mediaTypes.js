import MediaType from './mediaType';

/**
 * [mediaTypes description]
 * @type {[type]}
 */
export default class MediaTypes {
  mediaTypes: Object<string, MediaType> = {};

  /**
   * [constructor description]
   * @param  {[type]} definitions [description]
   * @return {[type]}             [description]
   */
  constructor(definitions: Object<string | number, Object> = []): void {
    for (const [key: string | number, definition: Object] of definitions.entries()) {
      this.mediaTypes[key] = new MediaType(definition);
    }
  }
}
