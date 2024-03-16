import { Button, Grid } from "@mui/material";

interface AuctionButtons {
  handleClose: () => void;
  handleProceed: () => void;
}

export const AuctionButtons = (props: AuctionButtons) => {
  const { handleClose, handleProceed } = props;
  return (
    <Grid display={"flex"} gap={1} padding={1}>
      <Button onClick={handleProceed} type="submit" variant="contained">
        Proceed
      </Button>
      <Button onClick={handleClose} variant="contained" color="secondary">
        Cancel
      </Button>
    </Grid>
  );
};
