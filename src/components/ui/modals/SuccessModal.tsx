import { Icon } from "@iconify/react";
import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  Grow,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  maxWidth?: false | Breakpoint | undefined;
  icon: string;
  iconSize?: string | number;
  dailogueTitle: string;
  ContentComponent: React.ComponentType;
  titleFont?: number;
  titleWeight?: number;
  iconColor?: string;
  hideClose?: boolean;
  hideActions?: boolean;
}

const SuccessModal = (props: Props) => {
  const {
    open,
    handleClose,
    titleFont,
    maxWidth,
    titleWeight,
    icon,
    iconSize,
    dailogueTitle,
    ContentComponent,
    iconColor,
    hideClose,
    hideActions,
  } = props;

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={handleClose}
      fullWidth={true}
      maxWidth={maxWidth ?? "xs"}
      TransitionComponent={Grow}
    >
      <DialogTitle
        id="alert-dialog-title"
        display={"flex"}
        alignContent={"center"}
        justifyContent={"space-between"}
      >
        <Grid display={"flex"} alignContent={"center"}>
          <Icon
            icon={icon}
            style={{ position: "relative", top: "3px", marginRight: "6px" }}
            fontSize={iconSize ?? "1rem"}
            color={iconColor ?? "primary"}
          />
          <Typography
            fontSize={titleFont ?? 15}
            fontWeight={titleWeight ?? 600}
          >
            {dailogueTitle}
          </Typography>
        </Grid>
        {!hideClose && (
          <Grid display={"flex"} alignContent={"center"}>
            <IconButton sx={{ paddingY: 0, paddingX: 1 }} onClick={handleClose}>
              <Icon icon={"tabler:x"} color="secondary" />
            </IconButton>
          </Grid>
        )}
      </DialogTitle>
      <Divider />
      <ContentComponent />
      {!hideActions && (
        <DialogActions className="dialog-actions-dense">
          <Button variant="contained" onClick={handleClose}>
            Copy
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default SuccessModal;
