export interface EvaluatorsCreateResponse {
  status: string;
  message: string;
  data: EvaluatorsCreateResponseData[];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface EvaluatorsCreateResponseData {
  password: string;
  userId: string;
  isBlocked: boolean;
  _id: string;
  role: string;
  email: string;
  evaluatedCarId: any[];
  location: string;
  createdAt: string;
  updatedAt: string;
}
