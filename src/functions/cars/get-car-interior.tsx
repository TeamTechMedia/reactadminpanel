import { CarReportData, CarReportDataType } from "@/services/cars/report/types";
import formatCarData from "./format-car-data";
import getCarInteriorData from "./get-interior-data";

const getCarInterior = (data: CarReportData) => {
  const { allCarInfo } = data || {};
  const interior: CarReportDataType[] = [];
  const interiorObj = getCarInteriorData(allCarInfo) as any;
  formatCarData(interiorObj, interior);

  return {
    interior,
  };
};

export default getCarInterior;
