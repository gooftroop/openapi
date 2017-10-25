import Contact from './contact';
import License from './license';

/**
 * [definition description]
 * @type {[type]}
 */
export default class Info {
  contact: Contact;
  description: string; // required
  license: License;
  termsOfService: string;
  title: string;
  version: string; // required

  // this.contact = new Contact(contact);
  // this.license = new License(license);
}
