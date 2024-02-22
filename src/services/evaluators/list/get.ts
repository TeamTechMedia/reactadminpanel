import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_EVALUATORS_ENDPOINT } from "../endpoints";
import { EvaluatorsGetParams } from "./types";
import { AxiosResponse } from "axios";

async function getEvaluators(
  params: EvaluatorsGetParams,
): Promise<AxiosResponse<any>> {
  const filterParams = {
    page: params.page + 1,
    limit: params.pageSize,
    role: params.role,
  };

  const response = await axiosInstance.get(GET_EVALUATORS_ENDPOINT, {
    params: filterParams,
  });

  return response;
}

export const useGetEvaluators = ({
  params,
}: {
  params: EvaluatorsGetParams;
}) => {
  return useQuery({
    queryKey: ["evaluators", params],
    queryFn: () => getEvaluators(params),
  });
};
