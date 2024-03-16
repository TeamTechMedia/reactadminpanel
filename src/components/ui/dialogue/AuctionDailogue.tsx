import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Breakpoint,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Grow,
  IconButton,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

interface DialogueProps {
  open: boolean;
  handleClose: () => void;
  maxWidth: false | Breakpoint | undefined;
  ComponentContent: ReactElement<any>;
  DialogButtons?: ReactElement<any>;
  icon: string;
  dailogueTitle: string;
  iconSize?: string;
  iconColor?: string;
  titleFont: number;
  titleWeight: number;
  hideActions?: boolean;
}

const CustomDialogue = (auctionProps: DialogueProps) => {
  const {
    open,
    handleClose,
    maxWidth,
    ComponentContent,
    icon,
    dailogueTitle,
    titleFont,
    iconColor,
    iconSize,
    titleWeight,
    hideActions,
  } = auctionProps;
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
        {!hideActions && (
          <Grid display={"flex"} alignContent={"center"}>
            <IconButton sx={{ paddingY: 0, paddingX: 1 }} onClick={handleClose}>
              <Icon icon={"tabler:x"} color="secondary" />
            </IconButton>
          </Grid>
        )}
      </DialogTitle>
      <Divider />
      {ComponentContent}
    </Dialog>
  );
};

export default CustomDialogue;
