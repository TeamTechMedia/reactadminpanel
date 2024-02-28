import { axiosInstance } from "@/axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { GET_EVALUATORS_ENDPOINT } from "../endpoints";

interface UpdateEvalProps {
  id: string;
  body: {
    isBlocked?: boolean;
  };
}

const updateEvaluator = (props: UpdateEvalProps) => {
  const { id, body } = props;
  return axiosInstance.patch(`${GET_EVALUATORS_ENDPOINT}/${id}`, {
    isBlocked: body.isBlocked,
  });
};

export const useUpdateEvaluator = () => {
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: { isBlocked: boolean } }) =>
      updateEvaluator({
        id,
        body,
      }),
  });
};
