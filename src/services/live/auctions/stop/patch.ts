import { axiosInstance } from "@/axios/axiosInstance";
import { GET_CARS_ENDPOINT } from "@/services/cars/endpoints";
import { useMutation } from "@tanstack/react-query";

export interface StopBody {
  status: "STOPPED" | "OTB_STOPPED";
  auctionOrOTBId: string;
}

interface StopCarProps {
  id: string;
  body: StopBody;
}

const stopCar = (props: StopCarProps) => {
  const { id, body } = props;
  return axiosInstance.patch(`${GET_CARS_ENDPOINT + "/stop/" + id}`, body);
};

export const useStopCar = () => {
  return useMutation({
    mutationFn: ({ id, body }: StopCarProps) =>
      stopCar({
        id,
        body,
      }),
  });
};
