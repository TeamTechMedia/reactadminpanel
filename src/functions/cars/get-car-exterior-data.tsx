import { AllCarInfo } from "@/services/cars/report/types";

const propertyMappings: { [key: string]: keyof AllCarInfo } = {
  "Front Image": "front",
  "Front Left Image": "frontLeft",
  "Front Right Image": "frontRight",
  "Left Image": "leftImage",
  "Right Image": "rightImage",
  "Rear Left": "rearLeft",
  "Rear Image": "rear",
  "Rear Right": "rearRight",
  "Roof Image": "roof",
  "Front Windshield & Wiper": "frontWindShield",
  "Rear Windshield": "rearWindShield",
  "Door Glass LH": "doorGlassLeft",
  "Door Glass RH": "doorGlassRight",
  "Quarter Glass": "quarterGlass",
  "Headlights - LH": "headLightLeft",
  "Headlights - RH": "headLightRight",
  "Headlight Support": "headLightSupport",
  "Front Bumper": "bumperFront",
  "Rear Bumper": "bumperRear",
  "Front Grill": "grill",
  "Bonnet Patti": "bonnetPatti",
  "Upper Cross Member": "upperCrossMember",
  "Lower Cross Member": "lowerCrossMember",
  "Apron LH": "apronLeft",
  "Apron RH": "apronRight",
  "Cowl Top": "cowlTop",
  "Chassis Extension": "chassisExtension",
  "Tyre Front RHS": "frontTyreRight",
  "Tyre Front LHS": "frontTyreLeft",
  "Tyre Rear RHS": "rearTyreRight",
  "Tyre Rear LHS": "rearTyreLeft",
  "LH Fender": "fenderLeft",
  "RH Fender": "fenderRight",
  "LH Quarter Panel": "quarterPanelLeft",
  "RH Quarter Panel": "quarterPanelRight",
  "Front LH Door": "doorFrontLeft",
  "Rear LH Door": "doorRearLeft",
  "Front RH Door": "doorFrontRight",
  "Rear RH Door": "doorRearRight",
  "LH-A Pillar": "leftApillar",
  "RH-A Pillar": "rightApillar",
  "LH-B Pillar": "leftBpillar",
  "RH-B Pillar": "rightBpillar",
  "LH-C Pillar": "leftCpillar",
  "RH-C Pillar": "rightCpillar",
  "LH Running Board": "runnningBorderLeft",
  "RH Running Board": "runnningBorderRight",
  "Tail Light LH": "tailLightLeft",
  "Tail Light RH": "tailLightRight",
  "Rear Wiper": "rearWiper",
  Boot: "boot",
  "Dicky Door": "dickyDoor",
  "Spare Wheel": "spareWheel",
  "LH Rear View Mirror": "rearViewMirrorLeft",
  "RH Rear View Mirror": "rearViewMirrorRight",
  "Fuel Lid": "fuelLid",
  Firewall: "firewall",
};

const getCarExteriorData = (allCarInfo: AllCarInfo) => {
  const exteriorObj: { [key: string]: any } = {};

  for (const [label, propertyName] of Object.entries(propertyMappings)) {
    const propertyData = allCarInfo?.[propertyName];
    if (
      typeof propertyData === "object" &&
      propertyData !== null &&
      !Array.isArray(propertyData)
    ) {
      exteriorObj[label] = {
        condition: propertyData.condition || null,
        url: propertyData.url || null,
        remarks: propertyData.remarks || null,
      };
    } else {
      exteriorObj[label] = {
        condition: null,
        url: null,
        remarks: null,
      };
    }
  }

  exteriorObj["Jack & Tool"] = allCarInfo?.jackAndTool;
  exteriorObj["Missing Parts"] = allCarInfo?.missingParts;
  exteriorObj["Full Body Repaint"] = allCarInfo?.fullBodyRepaint;

  return exteriorObj;
};

export default getCarExteriorData;
