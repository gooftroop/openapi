import headerRules from '../validation/rules/schema/header';
import MediaTypes from './mediaTypes';

/**
 * The Header Object follows the structure of the Parameter Object with the following changes:
 *
 * - name MUST NOT be specified, it is given in the corresponding headers map.
 * - in MUST NOT be specified, it is implicitly in header.
 * - All traits that are affected by the location MUST be applicable to a location of header (for example, style).
 */
export default class Header {
  // Sets the ability to pass empty-valued parameters.  This is valid only for query parameters and allows sending a
  // parameter with an empty value. Default value is false. If style is used, and if behavior is N/A
  // (cannot be serialized), the value of allowEmptyValue SHALL be ignored.
  allowEmptyValues: boolean;
  // Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;=
  // to be included without percent-encoding. This property only applies to parameters with an in value of query. The
  // default value is false.
  allowReserved: boolean;
  // A map containing the representations for the parameter. The key is the media type and the value describes it.
  // The map MUST only contain one entry.
  content: MediaTypes;
  // Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
  deprecated: boolean;
  // A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich
  // text representation.
  description: string;
  // When this is true, parameter values of type array or object generate separate parameters for each value of the
  // array or key-value pair of the map. For other types of parameters this property has no effect. When style is form,
  // the default value is true. For all other styles, the default value is false.
  explode: boolean;
  // Required
  // The location of the parameter. Implicity in the header.
  in: string = 'header'; // TODO freeze this
  // Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and
  // its value MUST be true. Otherwise, the property  MAY be included and its default value is false.
  required: boolean;
  // The schema defining the type used for the parameter.
  schema: Schema;
  // Describes how the parameter value will be serialized depending on the type of the parameter value. Default values
  // (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
  // TODO Refer to the 'Style Values' for validation here -
  // may need a Class (https://swagger.io/specification/#componentsObject)
  style: string;

  // this.content = new MediaTypes(content);
  getRule(): Object {
    return headerRules;
  }
}
