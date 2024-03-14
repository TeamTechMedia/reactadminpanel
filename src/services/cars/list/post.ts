import { axiosInstance } from "@/axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { CarDataSearchParams } from "./types";

export const useSearchCars = () => {
  return useMutation({
    mutationFn: (values: CarDataSearchParams) => {
      return axiosInstance.post("car-basic/list", values);
    },
  });
};
