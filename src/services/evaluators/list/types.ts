export type UserRoles = "EVALUATOR";

export type EvaluatorsGetParams = {
  page: number;
  pageSize: number;
  role?: UserRoles;
};
