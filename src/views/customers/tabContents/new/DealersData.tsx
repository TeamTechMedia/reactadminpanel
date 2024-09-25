import { Grid } from "@mui/material";
import { DealerContent } from "./DealerContent";
import { DealerSearchHeader } from "../../searchHeader/DealerSearchHeader";

export const DealersData = () => {
  return (
    <Grid marginTop={6}>
      <DealerSearchHeader />
      <DealerContent />
    </Grid>
  );
};
