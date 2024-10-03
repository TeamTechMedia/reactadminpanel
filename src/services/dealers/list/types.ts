export interface DealerDataObj {
  status: string;
  message: string;
  data: Datum[];
  count: number;
  page: number;
  totalUsers: number;
  verifiedUsers: number;
  unverifiedUsers: number;
  suspendedUsers: number;
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface Datum {
  _id: string;
  userId: string;
  isBlocked: boolean;
  role: string;
  contactNo: number;
  isCreated: boolean;
  isDeactivate: boolean;
  isDeposited: boolean;
  depositedAmount: number;
  onHoldAmount: number;
  isDocumentsVerified: string;
  extraContactNo: any[];
  internalNotes: any[];
  carNotes: any[];
  adminActivities: any[];
  dealerActivities: any[];
  accountInfo: any[];
  engagementMetrics: any[];
  createdAt: string;
  updatedAt: string;
  businessAddress?: string;
  businessName?: string;
  canceledCheque?: CanceledCheque;
  district?: string;
  email?: string;
  fullname?: string;
  pincode?: string;
  shopPicture?: CanceledCheque;
  visitingCard?: CanceledCheque;
}

interface CanceledCheque {
  name: string;
  url: string;
  type: string;
}
