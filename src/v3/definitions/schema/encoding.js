import AllowReservedRule from '../fields/allowReserved';
import ContentTypeRule from '../fields/contentType';
import ExplodeRule from '../fields/explode';
import HeadersRule from './headers';
import StyleRule from '../fields/style';

export default {
  allowReserved: new AllowReservedRule(),
  contentType: new ContentTypeRule(),
  explode: new ExplodeRule(),
  headers: new HeadersRule(),
  style: new StyleRule()
};
