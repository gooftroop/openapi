import Rule from '../rule';
import Links from '../../../schema/links';

/**
 * [definition description]
 * @type {[type]}
 */
export default class LinksRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new Links(definition, context);
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
