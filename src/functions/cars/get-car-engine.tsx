import { CarReportData, CarReportDataType } from "@/services/cars/report/types";
import formatCarData from "./format-car-data";
import getCarEngineData from "./get-car-engine-data";

const getCarEngine = (data: CarReportData) => {
  const { allCarInfo } = data || {};
  const engine: CarReportDataType[] = [];
  const engineObj = getCarEngineData(allCarInfo) as any;
  formatCarData(engineObj, engine);

  return {
    engine,
  };
};

export default getCarEngine;
