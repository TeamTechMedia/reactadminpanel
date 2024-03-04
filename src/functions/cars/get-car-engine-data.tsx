import { AllCarInfo } from "@/services/cars/report/types";

const getCarEngineData = (allCarInfo: AllCarInfo) => {
  const engineObj = {
    "Engine Compartment Image": {
      condition: allCarInfo?.engineCompartment?.condition,
      url: allCarInfo?.engineCompartment?.url,
      remarks: allCarInfo?.engineCompartment?.remarks,
    },
    "Engine Sound": allCarInfo?.engineSound,
    Engine: {
      condition: allCarInfo?.engine?.condition,
      url: allCarInfo?.engine?.url,
      remarks: allCarInfo?.engine?.remarks,
    },
    Smoke: allCarInfo?.exhaustSmoke,
    "Engine Idle Start Video": {
      condition: allCarInfo?.startVideo?.condition,
      url: allCarInfo?.startVideo?.url,
      remarks: allCarInfo?.startVideo?.remarks,
    },
    Battery: {
      condition: allCarInfo?.battery?.condition,
      url: allCarInfo?.battery?.url,
      remarks: allCarInfo?.battery?.remarks,
    },
    Radiator: allCarInfo?.radiator,
    "Starting Motor": allCarInfo?.startingMotor,
    Coolant: allCarInfo?.coolant,
    "Blowby Back Compression": {
      condition: allCarInfo?.blowBy?.condition,
      url: allCarInfo?.blowBy?.url,
      remarks: allCarInfo?.blowBy?.remarks,
    },
    Silencer: allCarInfo?.silencer,
    "Clutch Operations": {
      condition: allCarInfo?.clutch?.condition,
      url: allCarInfo?.clutch?.url,
      remarks: allCarInfo?.clutch?.remarks,
    },
    Gearbox: {
      condition: allCarInfo?.gearBox?.condition,
      url: allCarInfo?.gearBox?.url,
      remarks: allCarInfo?.gearBox?.remarks,
    },
    "Engine Oil": {
      condition: allCarInfo?.engineOil?.condition,
      url: allCarInfo?.engineOil?.url,
      remarks: allCarInfo?.engineOil?.remarks,
    },
    "Turbo Charger": {
      condition: allCarInfo?.turboCharger?.condition,
      url: allCarInfo?.turboCharger?.url,
      remarks: allCarInfo?.turboCharger?.remarks,
    },
    "Gearbox Leakage": allCarInfo?.gearBoxLeakage,
    "Engine Comments (Remark)": allCarInfo?.engineComment,
    "Engine Mount": {
      condition: allCarInfo?.mount?.condition,
      url: allCarInfo?.mount?.url,
      remarks: allCarInfo?.mount?.remarks,
    },
    Sump: {
      condition: allCarInfo?.sump?.condition,
      url: allCarInfo?.sump?.url,
      remarks: allCarInfo?.sump?.remarks,
    },
  };
  return engineObj;
};

export default getCarEngineData;
