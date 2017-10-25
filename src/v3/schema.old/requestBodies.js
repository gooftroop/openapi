import RequestBody from './requestBody';

/**
 * [requestBodies description]
 * @type {[type]}
 */
export default class RequestBodies {
  requestBodies: Object<string, RequestBody> = {};

  /**
   * [definitions description]
   * @type {[type]}
   */
  constructor(definitions: Object<string, Object> = {}): void {
    for (const [key: string, definition: Object] of definitions.entries()) {
      this.requestBodies[key] = new RequestBody(definition);
    }
  }
}
