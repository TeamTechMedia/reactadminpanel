import SuccessModal from "@/components/ui/modals/SuccessModal";
import { Grid, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

type SuccessModalTypes = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  successMsg: any;
};

const EvaluatorSuccessModal = (props: SuccessModalTypes) => {
  const { open, setOpen, successMsg } = props;

  function handleClose() {
    setOpen(!open);
  }

  const EvaluatorSuccessContent = () => {
    return (
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        padding={3}
        gap={1}
      >
        <Typography fontSize={17} fontWeight={600}>
          Evaluator added successfully!
        </Typography>
        <Typography>UserId: {successMsg.userId}</Typography>
        <Typography>Password: {successMsg.password}</Typography>
      </Grid>
    );
  };

  return (
    <SuccessModal
      open={open}
      icon="tabler:circle-check"
      iconColor={"#00b341"}
      iconSize={"1.75rem"}
      dailogueTitle="Success"
      handleClose={handleClose}
      ContentComponent={EvaluatorSuccessContent}
      titleFont={22}
    />
  );
};

export default EvaluatorSuccessModal;
