import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";
import { useContext, useState } from "react";
import { SpanBold } from "@/components/ui/utility/BoldSpan";
import useCustomToast from "@/utils/toast";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateDealer } from "@/services/users/patch";
import { useRouter } from "next/router";
import { DealerContext } from "../CustomerTabs";

const SuspendBody = ({
  handleClose,
  handleSubmit,
  isDeactivate,
}: {
  handleClose: () => void;
  handleSubmit: () => void;
  isDeactivate: boolean;
}) => {
  return (
    <Grid padding={3}>
      <Typography>
        Do you really want to{" "}
        <SpanBold text={isDeactivate ? "Activate" : "Suspend"} /> this account?
      </Typography>
      <Grid display={"flex"} justifyContent={"end"} gap={2} mt={3}>
        <Button onClick={handleClose} variant="outlined">
          No
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Yes
        </Button>
      </Grid>
    </Grid>
  );
};

export const AccountInfo = () => {
  const [open, setOpen] = useState(false);
  function handleBtn() {
    setOpen(!open);
  }
  const router = useRouter();
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const update = useUpdateDealer();
  const data = useContext(DealerContext);
  const { isDeactivate } = data || {};

  const handleSubmit = () => {
    update.mutate(
      {
        id: String(router.query.id),
        body: {
          isDeactivate: !isDeactivate,
        },
      },
      {
        onSuccess: () => handleSuccess(),
      },
    );
  };

  function handleSuccess() {
    toast.success("Dealer Updated Successfully");
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
    handleBtn();
  }

  return (
    <>
      <Card>
        <CardContent>
          <DealerCardContent
            heading="Account status"
            subHeading={`The account is currently ${isDeactivate ? "Suspended" : "Active"} `}
            btnText={isDeactivate ? "ReActivate" : "Suspend"}
            handleBtnClick={handleBtn}
          />
        </CardContent>
      </Card>
      <ConfirmModal
        dailogueTitle="Suspend Account"
        ContentComponent={
          <SuspendBody
            handleClose={handleBtn}
            handleSubmit={handleSubmit}
            isDeactivate={Boolean(isDeactivate)}
          />
        }
        handleClose={handleBtn}
        icon="tabler:info"
        iconSize={"1rem"}
        open={open}
      />
    </>
  );
};
