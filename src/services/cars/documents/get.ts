import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_CAR_DOCS } from "../endpoints";
import { AxiosResponse } from "axios";
import { CarDocsRoot } from "./types";

async function getCarDocs(id: string): Promise<AxiosResponse<CarDocsRoot>> {
  const response = await axiosInstance.get(GET_CAR_DOCS + id);

  return response;
}

export const useGetCarDocs = (id: string) => {
  return useQuery({
    queryKey: ["car-docs", id],
    queryFn: () => getCarDocs(id),
    enabled: !!id,
  });
};
