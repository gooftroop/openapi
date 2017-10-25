import Rule from '../rule';
import SecuritySchemes from '../../../schema/securitySchemes';

/**
 * [definition description]
 * @type {[type]}
 */
export default class SecuritySchemesRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new SecuritySchemes(definition, context);
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
