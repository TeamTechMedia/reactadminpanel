import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_EVALUATORS_ENDPOINT } from "../endpoints";
import { AxiosResponse } from "axios";
import { EvaluatorViewTypes } from "./types";

async function getEvaluators(
  id: string,
): Promise<AxiosResponse<EvaluatorViewTypes>> {
  const response = await axiosInstance.get(`${GET_EVALUATORS_ENDPOINT}/${id}`);

  return response;
}

export const useGetEvaluator = (id: string) => {
  return useQuery({
    queryKey: ["evaluators", id],
    queryFn: () => getEvaluators(id),
    enabled: !!id,
  });
};
