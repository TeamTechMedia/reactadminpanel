export interface CarType {
  status: string;
  message: string;
  data: CarDataType[];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

interface CarDataType {
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
  createdAt: string;
  updatedAt: string;
}
