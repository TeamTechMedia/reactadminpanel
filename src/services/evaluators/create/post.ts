import { axiosInstance } from "@/axios/axiosInstance";
import { EvaluatorAddFormType } from "@/types/evaluators/formTypes";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { GET_EVALUATORS_ENDPOINT } from "../endpoints";
import { AxiosResponse } from "axios";
import { EvaluatorsCreateResponse } from "./types";

export const useAddEvaluators = (): UseMutationResult<
  AxiosResponse<EvaluatorsCreateResponse>,
  unknown,
  EvaluatorAddFormType,
  unknown
> => {
  return useMutation({
    mutationFn: (values: EvaluatorAddFormType) => {
      return axiosInstance.post(GET_EVALUATORS_ENDPOINT, values);
    },
  });
};
