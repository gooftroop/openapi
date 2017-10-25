import Headers from './headers';
import MediaTypes from './mediaTypes';
import Links from './links';

/**
 * [requestBodies description]
 * @type {[type]}
 */
export default class Response {
  // Required
  content: MediaTypes;
  description: string;
  headers: Headers;
  links: Links;

  // this.content = new MediaTypes(content);
  // this.headers = new Headers(headers);
  // this.links = new Links(links);
}
