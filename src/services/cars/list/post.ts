import { axiosInstance } from "@/axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { CarDataSearchParams } from "./types";
import { GET_CARS_ENDPOINT } from "../endpoints";

export const useSearchCars = () => {
  return useMutation({
    mutationFn: (values: CarDataSearchParams) => {
      return axiosInstance.post(`${GET_CARS_ENDPOINT}list`, values);
    },
  });
};
