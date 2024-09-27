import { axiosInstance } from "@/axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { GET_EVALUATORS_ENDPOINT } from "../evaluators/endpoints";

interface ExtraContact {
  phoneNumber: number;
  name: string;
}

interface DealerVerify {
  isDocumentsVerified?: "VERIFIED";
  name?: string;
  businessAddress?: string;
  businessName?: string;
  pincode?: string;
  extraContactNo?: ExtraContact[];
  internalNotes?: { note: string; time: Date }[];
  isDeposited?: boolean;
  depositedAmount?: number;
  carNotes?: { model: string }[];
  isDeactivate?: boolean;
}

interface UpdateDealerProps {
  id: string;
  body: DealerVerify;
}

const updateEvaluator = (props: UpdateDealerProps) => {
  const { id, body } = props;
  return axiosInstance.patch(`${GET_EVALUATORS_ENDPOINT}/${id}`, body);
};

export const useUpdateDealer = () => {
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: DealerVerify }) =>
      updateEvaluator({
        id,
        body,
      }),
  });
};
