import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_EVALUATION_REPORT } from "../endpoints";
import { AxiosResponse } from "axios";
import { CarReport } from "./types";

async function getCarReport(id: string): Promise<AxiosResponse<CarReport>> {
  const response = await axiosInstance.get(GET_EVALUATION_REPORT + id);

  return response;
}

export const useGetCarReport = (id: string) => {
  return useQuery({
    queryKey: ["car-reports", id],
    queryFn: () => getCarReport(id),
    enabled: !!id,
  });
};
