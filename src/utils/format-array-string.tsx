import capitaliseArray from "./capitalise-array-with-commas";
import { formatString } from "./format-string";

export const formatArrayString = (data?: string[]) =>
  formatString(capitaliseArray(data));
