import Rule from '../rule';

/**
 *
 */
export default class EmailRule extends Rule {
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
