import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import SuccessModal from "@/components/ui/modals/SuccessModal";
import { theme } from "@/configs/theme/mui";
import { Grid, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";

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
    const [copy, setCopy] = useState(false);
    async function handleCopy() {
      try {
        const body = {
          userId: successMsg.userId,
          password: successMsg.originalPassword,
        };
        const text = JSON.stringify(body);
        const cleanText = text.replace(/[{}]/g, "");
        await navigator.clipboard.writeText(cleanText);
        setCopy(true);
      } catch (error) {
        console.error(error);
      }
    }
    return (
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        paddingX={3}
        paddingY={3}
        gap={1}
      >
        <Typography fontSize={17} fontWeight={600}>
          Evaluator added successfully!
        </Typography>
        <Typography>UserId: {successMsg.userId}</Typography>
        <Typography>Password: {successMsg.originalPassword}</Typography>
        <Grid display={"flex"} justifyContent={"center"} padding={2}>
          <ButtonIcon
            onClick={handleCopy}
            title={copy ? "Copied to clipboard" : "Copy to clipboard"}
            icon={copy ? "tabler:copy-check" : "tabler:copy"}
            color={copy ? "success" : theme.palette.primary.main}
            fontSize={"2rem"}
          />
        </Grid>
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
      hideActions
    />
  );
};

export default EvaluatorSuccessModal;
