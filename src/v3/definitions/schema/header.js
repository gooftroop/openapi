import Rule from '../rule';
import Header from '../../../schema/header';

/**
 * [definition description]
 * @type {[type]}
 */
export default class HeaderRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new Header(definition, context);
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
