import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_DEALER_ACTIVITY } from "../endpoints";
import { AxiosResponse } from "axios";

export type DealerActivityFilterType = "24hours" | "lastWeek";

export interface DealerActivityParams {
  id: string;
  filter: DealerActivityFilterType;
}

export const getActivity = async (
  params: DealerActivityParams,
): Promise<AxiosResponse<any>> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, filter } = params;
  return await axiosInstance.get(`${GET_DEALER_ACTIVITY}/${id}`, {
    params: {
      filter,
    },
  });
};

export const useGetDealerActivity = (params: DealerActivityParams) => {
  return useQuery({
    queryKey: ["dealer-activity", params],
    queryFn: () => getActivity(params),
  });
};
