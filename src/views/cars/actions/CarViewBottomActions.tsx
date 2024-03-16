import { Button, Grid } from "@mui/material";

interface CarViewBottomProps {
  showNext: boolean;
  isVerified: boolean;
  handleNext: () => void;
  handleApprove: () => void;
  handleApproveQC: () => void;
  handleRejectQC: () => void;
}

const CarViewBottomActions = (props: CarViewBottomProps) => {
  const {
    handleNext,
    handleApprove,
    handleApproveQC,
    handleRejectQC,
    showNext,
    isVerified,
  } = props;
  return (
    <Grid mt={4} display={"flex"} gap={3}>
      {showNext ? (
        <>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </>
      ) : isVerified ? (
        <>
          <Button onClick={handleApprove} variant="contained">
            Approve Auction
          </Button>
        </>
      ) : (
        <>
          <Button onClick={handleApproveQC} variant="contained">
            Approve QC
          </Button>
          <Button onClick={handleRejectQC} color="error" variant="outlined">
            Reject QC
          </Button>
        </>
      )}
    </Grid>
  );
};

export default CarViewBottomActions;
