import { Button, Grid } from "@mui/material";
import React from "react";

interface DrawerActionProps {
  cancelText?: string;
  submitText?: string;
  handleCancel?: () => void;
}

const DrawerActions = (props: DrawerActionProps) => {
  const { submitText, cancelText, handleCancel } = props;
  return (
    <Grid>
      <Button type="submit" variant="contained" sx={{ mr: 2 }}>
        {submitText ?? "Submit"}
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        onClick={handleCancel && handleCancel}
      >
        {cancelText ?? "Cancel"}
      </Button>
    </Grid>
  );
};

export default DrawerActions;
