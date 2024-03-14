import capitaliseArray from "@/utils/capitalise-array-with-commas";

const formatCarData = (
  obj: {
    condition: string[] | any;
    remarks: string;
    url: string;
  },
  arr: any,
) => {
  for (const [key, value] of Object.entries(obj)) {
    let fieldValue: any = "";
    if (typeof value === "string") {
      fieldValue = value;
      arr.push({
        label: key,
        value: fieldValue,
      });
    } else if (typeof value === "object" && value !== null) {
      fieldValue = Array.isArray(value.condition)
        ? capitaliseArray(value?.condition)
        : typeof value === "object"
          ? ""
          : value;

      if (Array.isArray(value.condition) && value.condition.includes("other")) {
        const otherIndex = value.condition.indexOf("other");
        if (otherIndex && otherIndex !== -1 && value.remarks) {
          fieldValue[otherIndex] = value.remarks;
        }
      }

      arr.push({
        label: key,
        value: fieldValue,
        url: value.url,
      });
    } else {
      fieldValue = value;
      arr.push({
        label: key,
        value: fieldValue,
      });
    }
  }
};

export default formatCarData;
