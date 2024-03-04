export interface CarDocsRoot {
  status: string;
  message: string;
  data: CarDocs;
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface CarDocs {
  taxValidity: string;
  rcAvailability: string;
  bankName: string;
  form35: string;
  hypothecation: string;
  insurance: string;
  insuranceCompany: string;
  insuranceIDV: string;
  insuranceMismatch: string;
  insuranceValidity: string;
  interStateTransfer: string;
  loanNoc: string;
  loanStatus: string;
  ncb: string;
  rcMismatch: string;
  remarks: string;
  rcFront: RcFront;
  rcBack: RcFront;
  chassisImage: RcFront;
  form35Image: ImageType;
  nocImage: ImageType;
}

export interface ImageType {
  name: string;
  remarks: string;
  url: string;
}

interface RcFront {
  name: string;
  url: string;
  remarks: string;
}
