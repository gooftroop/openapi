import Rule from '../rule';

/**
 * [definition description]
 * @type {[type]}
 */
export default class ExplodeRule extends Rule {
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
