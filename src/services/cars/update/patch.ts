import { useMutation } from "@tanstack/react-query";
import { UpdateCarProps } from "./type";
import { axiosInstance } from "@/axios/axiosInstance";
import { GET_CARS_ENDPOINT } from "../endpoints";

const updateCar = (props: UpdateCarProps) => {
  const { id, body } = props;
  return axiosInstance.patch(`${GET_CARS_ENDPOINT}/${id}`, body);
};

export const useUpdateCar = () => {
  return useMutation({
    mutationFn: ({ id, body }: UpdateCarProps) =>
      updateCar({
        id,
        body,
      }),
  });
};
