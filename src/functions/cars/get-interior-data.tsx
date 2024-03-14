import { AllCarInfo } from "@/services/cars/report/types";

const getCarInteriorData = (allCarInfo: AllCarInfo) => {
  const interiorObj = {
    "Cluster panel": {
      condition: allCarInfo?.clusterPanel?.condition,
      url: allCarInfo?.clusterPanel?.url,
      remarks: allCarInfo?.clusterPanel?.remarks,
    },
    "If Warning light yes, Warning details": allCarInfo?.warningDetails,
    "Dashboard Image": {
      condition: allCarInfo?.dashboardImage?.condition,
      url: allCarInfo?.dashboardImage?.url,
      remarks: allCarInfo?.dashboardImage?.remarks,
    },
    "Front Seat Image": {
      condition: allCarInfo?.frontSeatImage?.condition,
      url: allCarInfo?.frontSeatImage?.url,
      remarks: allCarInfo?.frontSeatImage?.remarks,
    },
    "Rear Seat Image": {
      condition: allCarInfo?.rearSeatImage?.condition,
      url: allCarInfo?.rearSeatImage?.url,
      remarks: allCarInfo?.rearSeatImage?.remarks,
    },
    "Inside Rear View Mirror": {
      condition: allCarInfo?.rearViewMirror?.condition,
      url: allCarInfo?.rearViewMirror?.url,
      remarks: allCarInfo?.rearViewMirror?.remarks,
    },
    "Interior View from Boot to Dashboard": {
      condition: allCarInfo?.interiorView?.condition,
      url: allCarInfo?.interiorView?.url,
      remarks: allCarInfo?.interiorView?.remarks,
    },
    "Power Window-Driver Image": {
      condition: allCarInfo?.powerWindowDriverImage?.condition,
      url: allCarInfo?.powerWindowDriverImage?.url,
      remarks: allCarInfo?.powerWindowDriverImage?.remarks,
    },
    "Push Window-Driver Image": {
      condition: allCarInfo?.pushWindowDriverImage?.condition,
      url: allCarInfo?.pushWindowDriverImage?.url,
      remarks: allCarInfo?.pushWindowDriverImage?.remarks,
    },
    "Push Button (On/Off)": allCarInfo?.pushButton,
    "Dashboard Switches": allCarInfo?.dashboardSwitch,
    "Power Window & Window Lock": {
      condition: allCarInfo?.powerWindowCentalLock?.condition,
      url: allCarInfo?.powerWindowCentalLock?.url,
      remarks: allCarInfo?.powerWindowCentalLock?.remarks,
    },
    "Hand Brake": allCarInfo?.handBreak,
    "Car Electrical": {
      condition: allCarInfo?.carElectrical?.condition,
      url: allCarInfo?.carElectrical?.url,
      remarks: allCarInfo?.carElectrical?.remarks,
    },
    "CNG/LPG Kit Image": {
      condition: allCarInfo?.cngKitImage?.condition,
      url: allCarInfo?.cngKitImage?.url,
      remarks: allCarInfo?.cngKitImage?.remarks,
    },
    "Second Key": allCarInfo?.secondKey,
    Platform: {
      condition: allCarInfo?.platformImage?.condition,
      url: allCarInfo?.platformImage?.url,
      remarks: allCarInfo?.platformImage?.remarks,
    },
  };
  return interiorObj;
};

export default getCarInteriorData;
