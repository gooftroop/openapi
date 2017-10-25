import Server from './server';

/**
 * [definion description]
 * @type {[type]}
 */
export default class Servers {
  servers: Array<Server> = [];

  /**
   * [definion description]
   * @type {[type]}
   */
  constructor(definions: Array<Object> = []): void {
    // TODO validate. If no servers exist, use default
    this.servers = definions.map((definition: Object) => {
      return new Server(definition);
    });
  }
}
