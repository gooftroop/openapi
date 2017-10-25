import Server from './server';

/**
 *
 */
export default class Link {
  operationRef: string;
  operationId: string;
  parameters: Object;
  requestBody: string;
  description: string;
  server: Server;

  // this.server = new Server(server);
}
