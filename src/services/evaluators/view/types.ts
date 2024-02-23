export interface EvaluatorViewTypes {
  status: string;
  message: string;
  data: EvaluatorViewResponse[];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface EvaluatorViewResponse {
  _id: string;
  fullname: string;
  userId: string;
  isBlocked: boolean;
  role: string;
  email: string;
  password: string;
  contactNo: number;
  evaluatedCarId: string[];
  location: string;
  createdAt: Date;
  updatedAt: string;
}
