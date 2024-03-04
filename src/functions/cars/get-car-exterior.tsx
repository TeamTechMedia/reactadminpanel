import { CarReportData } from "@/services/cars/report/types";
import capitaliseArray from "@/utils/capitalise-array-with-commas";
import getCarExteriorData from "./get-car-exterior-data";

interface ExteriorType {
  label: string;
  value?: string | undefined;
  url?: string;
}

const getCarExterior = (data: CarReportData) => {
  const { allCarInfo } = data || {};
  const exterior: ExteriorType[] = [];
  const exteriorObj = getCarExteriorData(allCarInfo);

  for (const [key, value] of Object.entries(exteriorObj)) {
    let fieldValue: any = "";
    if (typeof value === "string") {
      fieldValue = value;
      exterior.push({
        label: key,
        value: fieldValue,
      });
    } else {
      fieldValue = Array.isArray(value.condition)
        ? capitaliseArray(value?.condition)
        : typeof value === "object"
          ? ""
          : value;

      if (Array.isArray(value.condition) && value.condition.includes("other")) {
        const otherIndex = value.condition.indexOf("other");
        if (otherIndex !== -1 && value.remarks) {
          fieldValue[otherIndex] = value.remarks;
        }
      }
      exterior.push({
        label: key,
        value: fieldValue,
        url: value.url,
      });
    }
  }

  return {
    exterior,
  };
};

export default getCarExterior;
