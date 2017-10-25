import componentRules from '../validation/rules/schema/components';
import ExternalDocumentation from './externalDocs';
import Header from './header';
import Links from './links';
import OpenApiSchema from './index';
import Parameters from './parameters';
import Path from './path';
import Responses from './responses';
import RequestBodies from './requestBodies';
import Schemas from './schemas';
import SecuritySchemes from './securitySchemes';

/**
 * [definion description]
 * @type {[type]}
 */
export default class Components extends OpenApiSchema {
  callbacks: Object<string, Path>;
  externalDocs: ExternalDocumentation;
  headers: Object<string, Header>;
  links: Links;
  parameters: Parameters;
  responses: Responses;
  requestBodies: RequestBodies;
  schemas: Schemas;
  securitySchemes: SecuritySchemes;

  /**
   *
   */
  getRules(): Object {
    return componentRules;
  }
}
