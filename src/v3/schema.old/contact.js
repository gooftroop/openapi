import contactRules from '../validation/contact';
import OpenApiSchema from './index';

/**
 * [name description]
 * @type {[type]}
 */
export default class Contact extends OpenApiSchema {
  email: string;
  name: string;
  url: string;

  /**
   *
   */
  getRules(): Object {
    return contactRules;
  }
}
