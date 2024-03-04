import { AllCarInfo } from "@/services/cars/report/types";

const getCarExteriorData = (allCarInfo: AllCarInfo) => {
  const exteriorObj = {
    "Front Image": {
      condition: allCarInfo?.front?.condition,
      url: allCarInfo?.front?.url,
      remarks: allCarInfo?.front?.remarks,
    },
    "Front Left Image": {
      condition: allCarInfo?.frontLeft?.condition,
      url: allCarInfo?.frontLeft?.url,
      remarks: allCarInfo?.frontLeft?.remarks,
    },
    "Front Right Image": {
      condition: allCarInfo?.frontRight?.condition,
      url: allCarInfo?.frontRight?.url,
      remarks: allCarInfo?.frontRight?.remarks,
    },
    "Left Image": {
      condition: allCarInfo?.leftImage?.condition,
      url: allCarInfo?.leftImage?.url,
      remarks: allCarInfo?.leftImage?.remarks,
    },
    "Right Image": {
      condition: allCarInfo?.rightImage?.condition,
      url: allCarInfo?.rightImage?.url,
      remarks: allCarInfo?.rightImage?.remarks,
    },
    "Rear Left": {
      condition: allCarInfo?.rearLeft?.condition,
      url: allCarInfo?.rearLeft?.url,
      remarks: allCarInfo?.rearLeft?.remarks,
    },
    "Rear Image": {
      condition: allCarInfo?.rear?.condition,
      url: allCarInfo?.rear?.url,
      remarks: allCarInfo?.rear?.remarks,
    },
    "Rear Right": {
      condition: allCarInfo?.rearRight?.condition,
      url: allCarInfo?.rearRight?.url,
      remarks: allCarInfo?.rearRight?.remarks,
    },
    "Roof Image": {
      condition: allCarInfo?.roof?.condition,
      url: allCarInfo?.roof?.url,
      remarks: allCarInfo?.roof?.remarks,
    },
    "Front Windshield & Wiper": {
      condition: allCarInfo?.frontWindShield?.condition,
      url: allCarInfo?.frontWindShield?.url,
      remarks: allCarInfo?.frontWindShield?.remarks,
    },
    "Rear Windshield": {
      condition: allCarInfo?.rearWindShield?.condition,
      url: allCarInfo?.rearWindShield?.url,
      remarks: allCarInfo?.rearWindShield?.remarks,
    },
    "Door Glass LH": {
      condition: allCarInfo?.doorGlassLeft?.condition,
      url: allCarInfo?.doorGlassLeft?.url,
      remarks: allCarInfo?.doorGlassLeft?.remarks,
    },
    "Door Glass RH": {
      condition: allCarInfo?.doorGlassRight?.condition,
      url: allCarInfo?.doorGlassRight?.url,
      remarks: allCarInfo?.doorGlassRight?.remarks,
    },
    "Quarter Glass": {
      condition: allCarInfo?.quarterGlass?.condition,
      url: allCarInfo?.quarterGlass?.url,
      remarks: allCarInfo?.quarterGlass?.remarks,
    },
    "Headlights - LH": {
      condition: allCarInfo?.headLightLeft?.condition,
      url: allCarInfo?.headLightLeft?.url,
      remarks: allCarInfo?.headLightLeft?.remarks,
    },
    "Headlights - RH": {
      condition: allCarInfo?.headLightRight?.condition,
      url: allCarInfo?.headLightRight?.url,
      remarks: allCarInfo?.headLightRight?.remarks,
    },
    "Headlight Support": {
      condition: allCarInfo?.headLightSupport?.condition,
      url: allCarInfo?.headLightSupport?.url,
      remarks: allCarInfo?.headLightSupport?.remarks,
    },
    "Front Bumper": {
      condition: allCarInfo?.bumperFront?.condition,
      url: allCarInfo?.bumperFront?.url,
      remarks: allCarInfo?.bumperFront?.remarks,
    },
    "Rear Bumper": {
      condition: allCarInfo?.bumperRear?.condition,
      url: allCarInfo?.bumperRear?.url,
      remarks: allCarInfo?.bumperRear?.remarks,
    },
    "Front Grill": {
      condition: allCarInfo?.grill?.condition,
      url: allCarInfo?.grill?.url,
      remarks: allCarInfo?.grill?.remarks,
    },
    "Bonnet Patti": {
      condition: allCarInfo?.bonnetPatti?.condition,
      url: allCarInfo?.bonnetPatti?.url,
      remarks: allCarInfo?.bonnetPatti?.remarks,
    },
    "Upper Cross Member": {
      condition: allCarInfo?.upperCrossMember?.condition,
      url: allCarInfo?.upperCrossMember?.url,
      remarks: allCarInfo?.upperCrossMember?.remarks,
    },
    "Lower Cross Member": {
      condition: allCarInfo?.lowerCrossMember?.condition,
      url: allCarInfo?.lowerCrossMember?.url,
      remarks: allCarInfo?.lowerCrossMember?.remarks,
    },
    "Apron LH": {
      condition: allCarInfo?.apronLeft?.condition,
      url: allCarInfo?.apronLeft?.url,
      remarks: allCarInfo?.apronLeft?.remarks,
    },
    "Apron RH": {
      condition: allCarInfo?.apronRight?.condition,
      url: allCarInfo?.apronRight?.url,
      remarks: allCarInfo?.apronRight?.remarks,
    },
    "Cowl Top": {
      condition: allCarInfo?.cowlTop?.condition,
      url: allCarInfo?.cowlTop?.url,
      remarks: allCarInfo?.cowlTop?.remarks,
    },
    "Chassis Extension": {
      condition: allCarInfo?.chassisExtension?.condition,
      url: allCarInfo?.chassisExtension?.url,
      remarks: allCarInfo?.chassisExtension?.remarks,
    },
    "Tyre Front RHS": {
      condition: allCarInfo?.frontTyreRight?.condition,
      url: allCarInfo?.frontTyreRight?.url,
      remarks: allCarInfo?.frontTyreRight?.remarks,
    },
    "Tyre Front LHS": {
      condition: allCarInfo?.frontTyreLeft?.condition,
      url: allCarInfo?.frontTyreLeft?.url,
      remarks: allCarInfo?.frontTyreLeft?.remarks,
    },
    "Tyre Rear RHS": {
      condition: allCarInfo?.rearTyreRight?.condition,
      url: allCarInfo?.rearTyreRight?.url,
      remarks: allCarInfo?.rearTyreRight?.remarks,
    },
    "Tyre Rear LHS": {
      condition: allCarInfo?.rearTyreLeft?.condition,
      url: allCarInfo?.rearTyreLeft?.url,
      remarks: allCarInfo?.rearTyreLeft?.remarks,
    },
    "LH Fender": {
      condition: allCarInfo?.fenderLeft?.condition,
      url: allCarInfo?.fenderLeft?.url,
      remarks: allCarInfo?.fenderLeft?.remarks,
    },
    "RH Fender": {
      condition: allCarInfo?.fenderRight?.condition,
      url: allCarInfo?.fenderRight?.url,
      remarks: allCarInfo?.fenderRight?.remarks,
    },
    "LH Quarter Panel": {
      condition: allCarInfo?.quarterPanelLeft?.condition,
      url: allCarInfo?.quarterPanelLeft?.url,
      remarks: allCarInfo?.quarterPanelLeft?.remarks,
    },
    "RH Quarter Panel": {
      condition: allCarInfo?.quarterPanelRight?.condition,
      url: allCarInfo?.quarterPanelRight?.url,
      remarks: allCarInfo?.quarterPanelRight?.remarks,
    },
    "Front LH Door": {
      condition: allCarInfo?.doorFrontLeft?.condition,
      url: allCarInfo?.doorFrontLeft?.url,
      remarks: allCarInfo?.doorFrontLeft?.remarks,
    },
    "Rear LH Door": {
      condition: allCarInfo?.doorRearLeft?.condition,
      url: allCarInfo?.doorRearLeft?.url,
      remarks: allCarInfo?.doorRearLeft?.remarks,
    },
    "Front RH Door": {
      condition: allCarInfo?.doorFrontRight?.condition,
      url: allCarInfo?.doorFrontRight?.url,
      remarks: allCarInfo?.doorFrontRight?.remarks,
    },
    "Rear RH Door": {
      condition: allCarInfo?.doorRearRight?.condition,
      url: allCarInfo?.doorRearRight?.url,
      remarks: allCarInfo?.doorRearRight?.remarks,
    },
    "LH-A Pillar": {
      condition: allCarInfo?.leftApillar?.condition,
      url: allCarInfo?.leftApillar?.url,
      remarks: allCarInfo?.leftApillar?.remarks,
    },
    "RH-A Pillar": {
      condition: allCarInfo?.rightApillar?.condition,
      url: allCarInfo?.rightApillar?.url,
      remarks: allCarInfo?.rightApillar?.remarks,
    },
    "LH-B Pillar": {
      condition: allCarInfo?.leftBpillar?.condition,
      url: allCarInfo?.leftBpillar?.url,
      remarks: allCarInfo?.leftBpillar?.remarks,
    },
    "RH-B Pillar": {
      condition: allCarInfo?.rightBpillar?.condition,
      url: allCarInfo?.rightBpillar?.url,
      remarks: allCarInfo?.rightBpillar?.remarks,
    },
    "LH-C Pillar": {
      condition: allCarInfo?.leftCpillar?.condition,
      url: allCarInfo?.leftCpillar?.url,
      remarks: allCarInfo?.leftCpillar?.remarks,
    },
    "RH-C Pillar": {
      condition: allCarInfo?.rightCpillar?.condition,
      url: allCarInfo?.rightCpillar?.url,
      remarks: allCarInfo?.rightCpillar?.remarks,
    },
    "LH Running Board": {
      condition: allCarInfo?.runnningBorderLeft?.condition,
      url: allCarInfo?.runnningBorderLeft?.url,
      remarks: allCarInfo?.runnningBorderLeft?.remarks,
    },
    "RH Running Board": {
      condition: allCarInfo?.runnningBorderRight?.condition,
      url: allCarInfo?.runnningBorderRight?.url,
      remarks: allCarInfo?.runnningBorderRight?.remarks,
    },
    "Tail Light LH": {
      condition: allCarInfo?.tailLightLeft?.condition,
      url: allCarInfo?.tailLightLeft?.url,
      remarks: allCarInfo?.tailLightLeft?.remarks,
    },
    "Tail Light RH": {
      condition: allCarInfo?.tailLightRight?.condition,
      url: allCarInfo?.tailLightRight?.url,
      remarks: allCarInfo?.tailLightRight?.remarks,
    },
    "Rear Wiper": {
      condition: allCarInfo?.rearWiper?.condition,
      url: allCarInfo?.rearWiper?.url,
      remarks: allCarInfo?.rearWiper?.remarks,
    },
    Boot: {
      condition: allCarInfo?.boot?.condition,
      url: allCarInfo?.boot?.url,
      remarks: allCarInfo?.boot?.remarks,
    },
    "Dicky Door": {
      condition: allCarInfo?.dickyDoor?.condition,
      url: allCarInfo?.dickyDoor?.url,
      remarks: allCarInfo?.dickyDoor?.remarks,
    },
    "Spare Wheel": {
      condition: allCarInfo?.spareWheel?.condition,
      url: allCarInfo?.spareWheel?.url,
      remarks: allCarInfo?.spareWheel?.remarks,
    },
    "Jack & Tool": allCarInfo?.jackAndTool,
    "LH Rear View Mirror": {
      condition: allCarInfo?.rearViewMirrorLeft?.condition,
      url: allCarInfo?.rearViewMirrorLeft?.url,
      remarks: allCarInfo?.rearViewMirrorLeft?.remarks,
    },
    "RH Rear View Mirror": {
      condition: allCarInfo?.rearViewMirrorRight?.condition,
      url: allCarInfo?.rearViewMirrorRight?.url,
      remarks: allCarInfo?.rearViewMirrorRight?.remarks,
    },
    "Fuel Lid": {
      condition: allCarInfo?.fuelLid?.condition,
      url: allCarInfo?.fuelLid?.url,
      remarks: allCarInfo?.fuelLid?.remarks,
    },
    Firewall: {
      condition: allCarInfo?.firewall?.condition,
      url: allCarInfo?.firewall?.url,
      remarks: allCarInfo?.firewall?.remarks,
    },
    "Missing Parts": allCarInfo?.missingParts,
    "Full Body Repaint": allCarInfo?.fullBodyRepaint,
  };
  return exteriorObj;
};

export default getCarExteriorData;
