import { RoleType } from "@/types/auth/role";

export type LoginType = {
  role: string;
  userId: string;
  password: string;
};

export type LoginParamType = {
  userId: string;
  password: string;
};

export interface LoginSuccessResponse {
  data: LoginSuccess;
  status: number;
  statusText: string;
}

export interface LoginSuccess {
  status: string;
  message: string;
  data: LoginData[];
  meta: LoginMeta;
}

export interface LoginMeta {
  access: string;
  refresh: string;
}

export interface LoginData {
  _id: string;
  userId: string;
  isBlocked: boolean;
  role: RoleType | "";
  createdAt: string;
  updatedAt: string;
  email: string;
  fullname: string;
}
