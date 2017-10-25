import Rule from '../rule';
import RequestBodies from '../../../schema/requestBodies';

/**
 * [definition description]
 * @type {[type]}
 */
export default class RequestBodiesRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new RequestBodies(definition, context);
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
