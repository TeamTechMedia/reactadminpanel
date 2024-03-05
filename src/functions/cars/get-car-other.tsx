import { CarReportData, CarReportDataType } from "@/services/cars/report/types";
import formatCarData from "./format-car-data";
import getCarOtherData from "./get-car-other-data";

const getCarOther = (data: CarReportData) => {
  const { allCarInfo } = data || {};
  const testDrive: CarReportDataType[] = [];
  const features: CarReportDataType[] = [];
  const airConditioning: CarReportDataType[] = [];
  const specialComments: CarReportDataType[] = [];
  const manualRating: CarReportDataType[] = [];

  const {
    testDriveObj,
    featuresObj,
    airConditioningObj,
    specialCommentsObj,
    manualRatingObj,
  } = getCarOtherData(allCarInfo) as any;

  formatCarData(testDriveObj, testDrive);
  formatCarData(featuresObj, features);
  formatCarData(airConditioningObj, airConditioning);
  formatCarData(specialCommentsObj, specialComments);
  formatCarData(manualRatingObj, manualRating);

  return {
    testDrive,
    features,
    airConditioning,
    specialComments,
    manualRating,
  };
};

export default getCarOther;
