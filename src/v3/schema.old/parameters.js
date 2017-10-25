import Parameter from './parameter';

/**
 * [parameters description]
 * @type {[type]}
 */
export default class Parameters {
  parameters: Array<Parameter> = [];

  /**
   * [definitions description]
   * @type {[type]}
   */
  constructor(definitions: Array<Object> = []): void {
    this.parameters = definitions.map((definition: Object) => {
      return new Parameter(definition);
    });
  }
}
