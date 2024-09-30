import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_DEALER_PERFORMANCE } from "../endpoints";
import { AxiosResponse } from "axios";
import { DealerPerformance } from "./type";

export const getDealerPerformance = async (
  id: string,
): Promise<AxiosResponse<DealerPerformance>> => {
  return await axiosInstance.get(GET_DEALER_PERFORMANCE + "/" + id);
};

export const useGetDealerPerformance = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["dealer-performance", id],
    queryFn: () => getDealerPerformance(id),
    enabled: Boolean(id),
  });
};
