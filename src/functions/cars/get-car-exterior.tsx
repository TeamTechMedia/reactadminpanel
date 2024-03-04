import { CarReportData, CarReportDataType } from "@/services/cars/report/types";
import getCarExteriorData from "./get-car-exterior-data";
import formatCarData from "./format-car-data";

const getCarExterior = (data: CarReportData) => {
  const { allCarInfo } = data || {};
  const exterior: CarReportDataType[] = [];
  const exteriorObj = getCarExteriorData(allCarInfo) as any;
  formatCarData(exteriorObj, exterior);

  return {
    exterior,
  };
};

export default getCarExterior;
