export interface AuctionRoot {
  status: string;
  message: string;
  data: AuctionData[];
  meta: Meta;
  count: number;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface AuctionData {
  _id: string;
  uniqueId: number;
  make: string;
  model: string;
  variant: string;
  highestBid: number;
  status: string;
  leaderBoard: LeaderBoard[];
  winner: string;
  negotiation_amount: any[];
  negotiation_startTime: any[];
  negotiation_endTime: any[];
  negotiation_status: any[];
  procurement_status: any[];
  gst: any[];
  serviceFees: any[];
  totalAmount: any[];
  finalPrice: any[];
}

export interface LeaderBoard {
  amount: number;
  userId: string;
  isAutobid: boolean;
  autoBidLimit?: number;
  _id?: string;
  uniqueId: string;
  contactNo: number;
  fullname: string;
  isRejected: boolean;
  type: string;
}

export interface UpdateResultProps {
  id: string;
  body: {
    status: "accept" | "reject" | "offer";
    userId: string | null;
    startTime?: string;
    endTime?: string;
    gst?: string;
    serviceFees?: string;
    totalAmount?: string;
    amount?: number;
  };
}

export interface LogProps {
  id: string;
  model: string;
  type: "log" | "offer";
}
