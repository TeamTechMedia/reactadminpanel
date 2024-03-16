import { useUpdateCar } from "@/services/cars/update/patch";
import { UpdateCarDataBody } from "@/services/cars/update/type";

interface ApproveAuctions {
  body: UpdateCarDataBody;
  id: string;
  handleSuccess?: () => void;
}

const useUpdateCarById = () => {
  const update = useUpdateCar();

  function updateCar(props: ApproveAuctions) {
    const { body, id, handleSuccess } = props;
    update.mutate(
      {
        body,
        id,
      },
      {
        onSuccess: () => handleSuccess && handleSuccess(),
      },
    );
  }

  return updateCar;
};

export default useUpdateCarById;
