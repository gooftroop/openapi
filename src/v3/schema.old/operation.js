import Callbacks from './callbacks';
import ExternalDocumentation from './externalDocs';
import Parameters from './parameters';
import RequestBody from './requestBody';
import Responses from './responses';
import SecurityRequirement from './securityRequirement';
import Servers from './servers';
import Tags from './tags';

/**
 * [callbacks description]
 * @type {[type]}
 */
export default class Operation {
  callbacks: Callbacks;
  decprecated: boolean;
  description: string;
  externalDocs: ExternalDocumentation;
  operationId: string; // Must be unique
  parameters: Parameters; // overrides any parameters defined in PathItem. Must have unique members
  requestBody: RequestBody;
  responses: Responses; // required
  security: SecurityRequirement;
  servers: Servers;
  summary: string;
  tags: Array<Tags>;

  // this.callbacks = new Callbacks(callbacks);
  // this.externalDocs = new ExternalDocumentation(externalDocs);
  // this.parameters = new Parameters(parameters);
  // this.requestBody = new RequestBody(requestBody);
  // this.responses = new Responses(responses);
  // this.security = new SecurityRequirement(security);
  // this.servers = new Servers(servers);
  // this.tags = new Tags(tags);
}
