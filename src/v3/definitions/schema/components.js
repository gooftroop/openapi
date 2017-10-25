import Callbacks from 'v3/definitions/schema/callbacks';
import ExternalDocs from 'v3/definitions/schema/externalDocs';
import Headers from 'v3/definitions/schema/headers';
import Links from 'v3/definitions/schema/links';
import Parameters from 'v3/definitions/schema/parameters';
import Responses from 'v3/definitions/schema/responses';
import RequestBodies from 'v3/definitions/schema/requestBodies';
import Schemas from 'v3/definitions/schema/schemas';
import SecuritySchemes from 'v3/definitions/schema/securitySchemes';

import { SchemaFieldRule } from 'v3/definitions';

// TODO add resolve function!!!
// Split the definition path into keys since a definition path represents an access path inside the Component object
// TODO move into Component itself
// const keys: Array<string> = definition.replace('#/', '').split('/');
// let key: string;
// let currSchemaInst: Object = this.context;
//
// for (let i = 0; i < keys.length; i++) {
//   key = keys[i];
//   if (!(key in currSchemaInst)) {
//     return null;
//   }
//   currSchemaInst = currSchemaInst[key];
// }
// return currSchemaInst;

/**
 * [definition description]
 * @type {[type]}
 */
export default class Components extends SchemaFieldRule {

  /**
   * [callbacks description]
   * @type {Callbacks}
   */
  getMeta(): Object {
    return {
      callbacks: new Callbacks(this.context),
      externalDocs: new ExternalDocs(this.context),
      headers: new Headers(this.context),
      links: new Links(this.context),
      parameters: new Parameters(this.context),
      responses: new Responses(this.context),
      requestBodies: new RequestBodies(this.context),
      schemas: new Schemas(this.context),
      securitySchemes: new SecuritySchemes(this.context)
    };
  }

  /**
   * [definition description]
   * @type {[type]}
   */
  validateState(definition: any, state: OpenApiSchema): ?Error {
    return null;
  }
}
