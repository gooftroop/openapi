import Rule from '../rule';
import Parameters from '../../../schema/parameters';

/**
 * [definition description]
 * @type {[type]}
 */
export default class ParametersRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new Parameters(definition, context);
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
