import CustomDialogue from "@/components/ui/dialogue/AuctionDailogue";
import { SetStateAction } from "react";
import { AuctionContent } from "./AuctionContent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormSchema from "@/hooks/schema/cars/approve-auction/schema";
import { ApproveCar } from "@/types/cars/approve";
import { useRouter } from "next/router";
import useUpdateCarById from "@/hooks/actions/cars/update-car";
import { useQueryClient } from "@tanstack/react-query";

interface AuctionDialogueProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultValues = {
  startBidTime: new Date(),
  endBidTime: new Date(),
  realValue: 0,
};

function AuctionDialogue(props: AuctionDialogueProps) {
  const { open, setOpen } = props;
  const schema = useFormSchema();
  const router = useRouter();
  const approveAuction = useUpdateCarById();
  const queryClient = useQueryClient();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver<any>(schema),
  });

  function onSubmit(val: ApproveCar) {
    const id = String(router.query.id);
    approveAuction({
      body: { ...val },
      id,
      handleSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["car", "cars"] }),
    });
  }

  function handleClose() {
    setOpen(!open);
    reset();
  }

  return (
    <CustomDialogue
      open={open}
      dailogueTitle={"Ready for Auction?"}
      handleClose={handleClose}
      icon="tabler:gavel"
      maxWidth={"xs"}
      titleFont={18}
      titleWeight={600}
      iconSize="1.5rem"
      ComponentContent={
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuctionContent
            handleCancel={handleClose}
            control={control}
            errors={errors as any}
          />
        </form>
      }
    />
  );
}

export default AuctionDialogue;
