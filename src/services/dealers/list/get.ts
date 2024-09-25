import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_DEALERS } from "../endpoints";
import { AxiosResponse } from "axios";
import { DealerDataObj } from "./types";

interface DealerParams {
  limit: number;
  page: number;
  pageSize: number;
  sortKey?: "createdAt" | "name";
  sortValue?: 1 | -1;
  contactNo?: number;
  isDocumentsVerified?: string;
  isDeposited: boolean;
}

export const getDealers = async (
  params: DealerParams,
): Promise<AxiosResponse<DealerDataObj>> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pageSize, ...rest } = params;
  const filterParams = {
    ...rest,
  };
  return await axiosInstance.get(GET_DEALERS, {
    params: filterParams,
  });
};

export const useGetDealers = ({ params }: { params: DealerParams }) => {
  return useQuery({
    queryKey: ["dealers", params],
    queryFn: () => getDealers(params),
  });
};
