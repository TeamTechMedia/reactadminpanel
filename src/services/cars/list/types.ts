export interface RootObject {
  status: string;
  message: string;
  data: (CarData | Data2 | Data3 | Data4 | Data5 | number)[];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

interface Data5 {
  _id: string;
  make: string;
  model: string;
  variant: string;
  maskedRegNumber: string;
  valuationCity: string;
  fuelType: string;
  qcStatus: string;
  highestBid: number;
  totalBidder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Data4 {
  _id: string;
  uniqueId: number;
  qcStatus: string;
  highestBid: number;
  totalBidder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Data3 {
  _id: string;
  uniqueId: number;
  make: string;
  model: string;
  variant: string;
  maskedRegNumber: string;
  valuationLocation: string;
  ownershipNumber: string;
  fuelType: string;
  qcStatus: string;
  highestBid: number;
  totalBidder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Data2 {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface CarData {
  _id: string;
  uniqueId: number;
  make: string;
  model: string;
  variant: string;
  maskedRegNumber: string;
  ownershipNumber: string;
  fuelType: string;
  qcStatus: string;
  highestBid: number;
  totalBidder: number;
  status: string;
  createdAt: Date;
  updatedAt: string;
  vehicleLocation: string;
}

export interface CarParams {
  pageSize: number;
  page: number;
  sortKey?: string;
}

export interface CarDataSearchParams {
  lastFourDigits?: string;
  createdAt?: Date | null;
}
