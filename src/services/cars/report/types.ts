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

export interface CarReportData {
  _id: string;
  allCarInfo: AllCarInfo;
  chasisNumber: string;
  monthAndYearOfManufacture: string;
  regDate: string;
  bodyType: string;
  color: string;
  odometerReading: number;
  rcAvailability: string;
  insurance: string;
  form35: string;
  regNumber: string;
  customerPrice: string;
}

export interface AllCarInfo {
  engineCylinder: number;
  evaluationStatusForEngine: string;
  createdAt: string;
  updatedAt: string;
  evaluationStatusForExterior: string;
  apronLeft: LeftImage;
  apronRight: LeftImage;
  bonnetPatti: LeftImage;
  boot: LeftImage;
  bumperFront: LeftImage;
  bumperRear: LeftImage;
  chassisExtension: LeftImage;
  cowlTop: LeftImage;
  dickyDoor: LeftImage;
  doorFrontLeft: LeftImage;
  doorFrontRight: LeftImage;
  doorGlassLeft: LeftImage;
  doorGlassRight: LeftImage;
  doorRearLeft: LeftImage;
  doorRearRight: LeftImage;
  fenderLeft: LeftImage;
  fenderRight: LeftImage;
  firewall: LeftImage;
  frontTyreLeft: FrontTyreLeft;
  frontTyreRight: FrontTyreLeft;
  frontWindShield: LeftImage;
  fuelLid: LeftImage;
  fullBodyRepaint: string;
  grill: LeftImage;
  headLightLeft: LeftImage;
  headLightRight: LeftImage;
  headLightSupport: LeftImage;
  jackAndTool: string;
  leftApillar: LeftImage;
  leftBpillar: LeftImage;
  leftCpillar: LeftImage;
  leftImage: LeftImage;
  lowerCrossMember: LeftImage;
  missingParts: string;
  quarterGlass: LeftImage;
  quarterPanelLeft: LeftImage;
  quarterPanelRight: LeftImage;
  rearTyreLeft: FrontTyreLeft;
  rearTyreRight: FrontTyreLeft;
  rearViewMirrorLeft: LeftImage;
  rearViewMirrorRight: LeftImage;
  rearWindShield: LeftImage;
  rearWiper: LeftImage;
  rightApillar: LeftImage;
  rightBpillar: LeftImage;
  rightCpillar: LeftImage;
  rightImage: LeftImage;
  roof: LeftImage;
  runnningBorderLeft: LeftImage;
  runnningBorderRight: LeftImage;
  spareWheel: LeftImage;
  tailLightLeft: LeftImage;
  tailLightRight: LeftImage;
  upperCrossMember: LeftImage;
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
  carElectrical: FrontTyreLeft;
  clusterPanel: ClusterPanel;
  cngKitImage: LeftImage;
  combitionSwitch: string;
  dashboardCondition: string;
  dashboardImage: FrontTyreLeft;
  dashboardSwitch: string;
  frontSeatImage: FrontTyreLeft;
  interiorView: LeftImage;
  key: string;
  platformImage: FrontTyreLeft;
  powerWindowCentalLock: ClusterPanel;
  powerWindowDriverImage: LeftImage;
  pushButton: string;
  pushWindowDriverImage: LeftImage;
  rearSeatImage: FrontTyreLeft;
  rearViewMirror: ClusterPanel;
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
  acBlowerGrill: string;
  acFilterDamaged: string;
  acWorking: string;
  climateControl: string;
  heater: string;
  rearDefogger: string;
  carCondition: string;
  specialComments: string;
  absEbd: ClusterPanel;
  airbag: ClusterPanel;
  alloyWheels: ClusterPanel;
  anyInteriorModifications: string;
  fogLamps: string;
  gloveBox: ClusterPanel;
  gpsNavigation: string;
  keylessEntry: ClusterPanel;
  rearParkingSensor: string;
  seatBelt: string;
  stereoBrand: string;
  stereoImage: FrontTyreLeft;
  sunroof: ClusterPanel;
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
  front: FrontTyreLeft;
  frontLeft: FrontTyreLeft;
  frontRight: FrontTyreLeft;
  rear: FrontTyreLeft;
  rearLeft: FrontTyreLeft;
  rearRight: FrontTyreLeft;
}

interface ClusterPanel {
  name: string;
  url: string;
  condition: string[];
}

interface LeftImage {
  name: string;
  url: string;
  condition: any[];
  remarks: string;
}

interface FrontTyreLeft {
  name: string;
  url: string;
  condition: string[];
  remarks: string;
}
