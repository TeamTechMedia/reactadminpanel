import { AllCarInfo } from "@/services/cars/report/types";

const getCarOtherData = (allCarInfo: AllCarInfo) => {
  const testDriveObj = {
    "Steering System": allCarInfo?.steeringSystem,
    "Steering Wheel": allCarInfo?.steeringWheel,
    "Steering Adjustment": allCarInfo?.steeringAdjustment,
    "Steering mounted audio control": allCarInfo?.steeringMountedAudioControl,
    "Cruise Control": allCarInfo?.cruiseControl,
    "Seat Adjustment": allCarInfo?.seatAdjustment,
    "Suspension System": allCarInfo?.suspension,
    Brakes: allCarInfo?.brakes,
    "Clutch System": allCarInfo?.clutchSystem,
    "Transmission Automatic": allCarInfo?.transmissionAutomatic,
    "Vehicle Horn": allCarInfo?.vehicleHorn,
  };

  const featuresObj = {
    "Keyless Entry": {
      condition: allCarInfo?.keylessEntry?.condition,
      url: allCarInfo?.keylessEntry?.url,
      name: allCarInfo?.keylessEntry?.name,
    },
    "Stereo Image": {
      condition: allCarInfo?.stereoImage?.condition,
      url: allCarInfo?.stereoImage?.url,
      remarks: allCarInfo?.stereoImage?.remarks,
    },
    "Stereo Brand": allCarInfo?.stereoBrand,
    "Rear Parking Sensor": allCarInfo?.rearParkingSensor,
    "Fog Lamp": allCarInfo?.fogLamps,
    Sunroof: allCarInfo?.sunroof,
    "GPS Navigation": allCarInfo?.gpsNavigation,
    "Rear Defogger": allCarInfo?.rearDefogger,
    "Alloy Wheels": allCarInfo?.alloyWheels,
    "Fog Lamps": allCarInfo?.fogLamps,
    "Air Bag": {
      condition: allCarInfo?.airbag?.condition,
      url: allCarInfo?.airbag?.url,
      name: allCarInfo?.airbag?.name,
    },
    "Seat Belt": allCarInfo?.seatBelt,
    "ABS EBD (Anti-lock Braking System)": {
      condition: allCarInfo?.absEbd?.condition,
      name: allCarInfo?.absEbd?.name,
      url: allCarInfo?.absEbd?.url,
    },
    "Glove Box": {
      condition: allCarInfo?.gloveBox?.condition,
      url: allCarInfo?.gloveBox?.url,
      name: allCarInfo?.gloveBox?.name,
    },
    "Any Interior Modifications": allCarInfo?.anyInteriorModifications,
  };

  const airConditioningObj = {
    "AC Working": allCarInfo?.acWorking,
    Cooling: allCarInfo?.airCooling,
    Heater: allCarInfo?.heater,
    "Climate Control": allCarInfo?.climateControl,
    "AC Condenser Compressor": allCarInfo?.acCondensor,
    "AC Filter Damaged": allCarInfo?.acFilterDamaged,
    "AC Blower Grill": allCarInfo?.acBlowerGrill,
    "Rear defogger": allCarInfo?.rearDefogger,
  };

  const specialCommentsObj = {
    "Special Comments": allCarInfo?.specialComments,
  };

  const manualRatingObj = {
    "Exterior Rating": allCarInfo?.exteriorStar,
    "Interior & Electrical Rating": allCarInfo?.interiorAndElectricalStar,
    "Engine Rating": allCarInfo?.engineStar,
    "Test Drive": allCarInfo?.testDriveStar,
  };

  return {
    testDriveObj,
    featuresObj,
    airConditioningObj,
    specialCommentsObj,
    manualRatingObj,
  };
};

export default getCarOtherData;
