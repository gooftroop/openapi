import Rule from '../rule';
import ExternalDocumentation from '../../../schema/externalDocs';

/**
 * [definition description]
 * @type {[type]}
 */
export default class ExternalDocsRule extends Rule {
  /**
   * [destination description]
   * @type {[type]}
   */
  value(definition: any, context: Object): any {
    return new ExternalDocumentation(definition, context);
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
