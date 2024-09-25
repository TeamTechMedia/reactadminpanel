export type BasicDealersDetails = {
  fullname: string;
  businessName: string;
  businessAddress: string;
  pincode: string;
};

export type ContactDealerDetails = {
  name: string;
  phoneNumber: number | null;
};

export type DealerNotes = {
  notes: string;
  time: Date;
};
