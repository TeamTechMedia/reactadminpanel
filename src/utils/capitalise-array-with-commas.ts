import { capitaliseFirstLetter } from "./capitalise-firstletter";
import filterArray from "./filter-empty-strings-array";

const capitaliseArray = (arr: string[]) => {
  if (arr)
    return filterArray(arr)
      .map((item) => capitaliseFirstLetter(item))
      .join(", ");
};

export default capitaliseArray;
