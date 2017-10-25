import Encodings from './encodings';
import Schema from './schema';

/**
 * [encoding description]
 * @type {[type]}
 */
export default class MediaType {
  encoding: Encodings; // The key, being the property name, MUST exist in the schema as a property
  schema: Schema;

  // this.encoding = new Encodings(encoding);
  // this.schema = new Schema(schema);
}
