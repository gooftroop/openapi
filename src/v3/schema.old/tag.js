import ExternalDocumentation from './externalDocs';

/**
 *
 */
export default class Tag {
  // A short description for the tag. CommonMark syntax MAY be used for rich text representation.
  description: string;
  // Additional external documentation for this tag.
  externalDocs: ExternalDocumentation;
  // Required.
  // The name of the tag
  name: string;

  // this.externalDocs = new ExternalDocumentation(externalDocs);
}
