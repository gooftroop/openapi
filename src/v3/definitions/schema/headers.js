import Rule from '../rule';
import Header from '../../../schema/headers';

/**
 * [definition description]
 * @type {[type]}
 */
export default class HeadersRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definitions: any, context: Object): Object<string, Header> {
    const headers: Object<string, Header> = {};

    for (const [key: string, definition: Object] of definitions.entries()) {
      headers[key] = new Header(definition, context);
    }
    return headers;
  }

  /**
   * [definition description]
   * @type {[type]}
   */
  validateDefinition(definition: any): ?Error {
    return null;
  }

  /**
   * [definition description]
   * @type {[type]}
   */
  validateState(definition: any, state: OpenApiSchema): ?Error {
    return null;
  }
}
