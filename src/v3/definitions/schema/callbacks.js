import MapRule from 'v3/definitions/map';
import Path from 'v3/definitions/schema/path';
import { SchemaFieldRule } from 'v3/definitions';

/**
 *
 */
export default class Callbacks extends SchemaFieldRule {

  getMeta(): Object {
    callbacks: MapRule('string', Path, this.context)
  }
}
