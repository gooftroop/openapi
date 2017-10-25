import Rule from '../rule';
import Schemas from '../../../schema/schemas';

/**
 * [definition description]
 * @type {[type]}
 */
export default class SchemasRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new Schemas(definition, context);
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
