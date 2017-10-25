import EmailRule from '../fields/email';
import NameRule from '../fields/name';
import UrlRule from '../fields/url';

export default {
  email: new EmailRule(),
  name: new NameRule(),
  url: new UrlRule()
};
