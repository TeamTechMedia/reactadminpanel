import { ContactDealerDetails } from "./types";

export interface DealerObject {
  status: string;
  message: string;
  data: Dealer[];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface Dealer {
  fcmNotification: FcmNotification;
  isDeactivate: boolean;
  lostDeal: any[];
  likedCars: any[];
  biddedCars: any[];
  _id: string;
  userId: string;
  isBlocked: boolean;
  role: string;
  contactNo: number;
  isDeposited: boolean;
  depositedAmount: number;
  isDocumentsVerified: string;
  createdAt: string;
  updatedAt: string;
  addressProofBack: AddressProofBack;
  addressProofFront: AddressProofBack;
  businessAddress: string;
  businessName: string;
  canceledCheque: AddressProofBack;
  district: string;
  fullname: string;
  panCard: AddressProofBack;
  pincode: string;
  shopPicture: AddressProofBack;
  visitingCard: AddressProofBack;
  order_id: string;
  extraContactNo?: ContactDealerDetails[];
  internalNotes: { note: string; time: Date }[];
  carNotes: { model: string }[];
}

export interface AddressProofBack {
  name: string;
  url: string;
  type: string;
}

interface FcmNotification {
  fcmToken: null;
  platform: string;
}
