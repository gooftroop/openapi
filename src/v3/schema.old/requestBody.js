import MediaTypes from './mediaTypes';

/**
 * [content description]
 * @type {[type]}
 */
export default class RequestBody {
  content: MediaTypes; // required
  description: string;
  required: boolean;

  /**
   * [callbacks description]
   * @type {[type]}
   */
  constructor({ content, description = '', required = false } = {}): void {
    this.content = new MediaTypes(content);
    this.description = description;
    this.required = required;
  }
}}
