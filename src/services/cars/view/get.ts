import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GET_CARS_ENDPOINT } from "../endpoints";

async function getCar(id: string) {
  const response = await axiosInstance.get(GET_CARS_ENDPOINT + id);

  return response;
}

export const useGetCar = (id: string) => {
  return useQuery({
    queryKey: ["car", id],
    queryFn: () => getCar(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};
