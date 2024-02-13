import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_CARS_ENDPOINT } from "../endpoints";
import { CarParams } from "./types";

async function getCars(params: CarParams) {
  const filterParams = {
    page: params.page + 1,
    limit: params.pageSize,
  };

  const response = await axiosInstance.get(GET_CARS_ENDPOINT, {
    params: filterParams,
  });

  return response;
}

export const useGetCars = ({
  params,
}: {
  params: { pageSize: number; page: number };
}) => {
  return useQuery({
    queryKey: ["cars", params],
    queryFn: () => getCars(params),
  });
};
