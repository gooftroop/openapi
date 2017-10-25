import Operation from './operation';
import Parameters from './parameters';
import Servers from './servers';

/**
 * [delete description]
 * @type {[type]}
 */
export default class PathItem {
  delete: Operation;
  description: string;
  get: Operation;
  head: Operation;
  options: Operation;
  parameters: Parameters;
  patch: Operation;
  post: Operation;
  put: Operation;
  servers: Servers;
  summary: string;
  trace: Operation;
  // $ref: string;

  // this.delete = new Operation(deleteArg);
  // this.get = new Operation(get);
  // this.head = new Operation(head);
  // this.options = new Operation(options);
  // this.parameters = new Parameters(parameters);
  // this.patch = new Operation(patch);
  // this.post = new Operation(post);
  // this.put = new Operation(put);
  // this.servers = new Servers(servers);
  // this.trace = new Operation(trace);
}
