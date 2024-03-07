export interface CarReport {
  status: string;
  message: string;
  data: CarReportData;
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface CarReportDataType {
  label: string;
  value?: string | undefined;
  url?: string;
}

export interface CarReportData {
  _id: string;
  engineNumber: string;
  evaluationRemarks: string;
  duplicateKey: string;
  oemWarrantyRemain: string;
  transmission: string;
  accidential: string;
  oemMonthRemain: string;
  seats: string;
  oemKmRemain: string;
  taxValidity: string;
  isCarRegistered: string;
  odometerWorking: string;
  cngKitImage: string;
  engineCC: string;
  sellerName: string;
  regValidity: string;
  sellerAddress: string;
  sellerMobileNumber: string;
  allCarInfo: AllCarInfo;
  rcOwnerMobileNumber: string;
  rcOwnerName: string;
  chasisNumber: string;
  monthAndYearOfManufacture: string;
  regDate: string;
  rto: string;
  bodyType: string;
  color: string;
  odometerReading: number;
  rcAvailability: string;
  insurance: string;
  vehicleUsage: string;
  form35: string;
  regNumber: string;
  regState: string;
  customerPrice: string;
}

export interface AllCarInfo {
  engineCylinder: number;
  evaluationStatusForEngine: string;
  airbag: StartVideo;
  absEbd: StartVideo;
  alloyWheels: string[];
  cngKitImage: StartVideo;
  battery: StartVideo;
  sunroof: string[];
  createdAt: string;
  updatedAt: string;
  StartVideo: StartVideo;
  blowBy: StartVideo;
  clutch: StartVideo;
  coolant: string;
  engine: StartVideo;
  engineComment: string;
  engineCompartment: EngineCompartment;
  engineOil: StartVideo;
  engineSound: string;
  exhaustSmoke: string;
  gearBox: StartVideo;
  gearBoxLeakage: string;
  gloveBox: StartVideo;
  keylessEntry: StartVideo;
  mount: StartVideo;
  radiator: string;
  silencer: string;
  startVideo: StartVideo;
  startingMotor: string;
  sump: StartVideo;
  turboCharger: StartVideo;
  transmission: string;
  evaluationStatusForExterior: string;
  apronLeft: StartVideo;
  apronRight: StartVideo;
  bonnetPatti: StartVideo;
  boot: StartVideo;
  bumperFront: StartVideo;
  bumperRear: StartVideo;
  chassisExtension: StartVideo;
  cowlTop: StartVideo;
  dickyDoor: StartVideo;
  doorFrontLeft: StartVideo;
  doorFrontRight: StartVideo;
  doorGlassLeft: StartVideo;
  doorGlassRight: StartVideo;
  doorRearLeft: StartVideo;
  doorRearRight: StartVideo;
  fenderLeft: StartVideo;
  fenderRight: StartVideo;
  firewall: StartVideo;
  frontTyreLeft: StartVideo;
  frontTyreRight: StartVideo;
  frontWindShield: StartVideo;
  fuelLid: StartVideo;
  fullBodyRepaint: string;
  grill: StartVideo;
  headLightLeft: StartVideo;
  headLightRight: StartVideo;
  headLightSupport: StartVideo;
  jackAndTool: string;
  leftApillar: StartVideo;
  leftBpillar: StartVideo;
  leftCpillar: StartVideo;
  leftImage: EngineCompartment;
  lowerCrossMember: StartVideo;
  missingParts: string;
  quarterGlass: StartVideo;
  quarterPanelLeft: StartVideo;
  quarterPanelRight: StartVideo;
  rearTyreLeft: StartVideo;
  rearTyreRight: StartVideo;
  rearViewMirrorLeft: StartVideo;
  rearViewMirrorRight: StartVideo;
  rearWindShield: StartVideo;
  rearWiper: StartVideo;
  rightApillar: StartVideo;
  rightBpillar: StartVideo;
  rightCpillar: StartVideo;
  rightImage: EngineCompartment;
  roof: StartVideo;
  runnningBorderLeft: StartVideo;
  runnningBorderRight: StartVideo;
  spareWheel: StartVideo;
  tailLightLeft: StartVideo;
  tailLightRight: StartVideo;
  upperCrossMember: StartVideo;
  handBreak: string[];
  evaluationStatusForInterior: string;
  steeringWheel: string[];
  suspension: string[];
  transmissionAutomatic: string[];
  vehicleHorn: string[];
  evaluationStatusForTestDrive: string;
  evaluationStatusForFeature: string;
  airCooling: string[];
  acCondensor: string[];
  evaluationStatusForAc: string;
  carElectrical: StartVideo;
  clusterPanel: ClusterPanel;
  combitionSwitch: string;
  dashboardCondition: string;
  dashboardImage: StartVideo;
  dashboardSwitch: string;
  frontSeatImage: StartVideo;
  interiorView: EngineCompartment;
  key: string;
  platformImage: StartVideo;
  powerWindowCentalLock: StartVideo;
  powerWindowDriverImage: EngineCompartment;
  pushButton: string;
  pushWindowDriverImage: EngineCompartment;
  rearSeatImage: StartVideo;
  rearViewMirror: StartVideo;
  secondKey: string;
  warningDetails: string;
  brakes: string;
  clutchSystem: string;
  cruiseControl: string;
  seatAdjustment: string;
  steeringAdjustment: string;
  steeringMountedAudioControl: string;
  steeringSystem: string;
  transmissionManual: string;
  anyInteriorModifications: string;
  fogLamps: string;
  gpsNavigation: string;
  rearDefogger: string;
  rearParkingSensor: string;
  seatBelt: string;
  stereoBrand: string;
  stereoImage: StartVideo;
  acBlowerGrill: string;
  acFilterDamaged: string;
  acWorking: string;
  climateControl: string;
  heater: string;
  carCondition: string;
  specialComments: string;
  engineStar: number;
  exteriorStar: number;
  interiorAndElectricalStar: number;
  testDriveStar: number;
  uniqueId: number;
  make: string;
  model: string;
  variant: string;
  maskedRegNumber: string;
  vehicleLocation: string;
  ownershipNumber: string;
  fuelType: string;
  qcStatus: string;
  highestBid: number;
  totalBidder: number;
  status: string;
  front: StartVideo;
  frontLeft: StartVideo;
  frontRight: StartVideo;
  rear: StartVideo;
  rearLeft: StartVideo;
  rearRight: StartVideo;
}

interface ClusterPanel {
  name: string;
  url: string;
  condition: string[];
  remarks?: string;
}

interface StartVideo {
  name: string;
  url: string;
  condition: string[];
  remarks: string;
}

interface EngineCompartment {
  name: string;
  url: string;
  condition: any[];
  remarks: string;
}

interface StartVideo {
  condition: string[];
}
