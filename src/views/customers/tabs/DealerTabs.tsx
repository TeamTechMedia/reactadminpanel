import { Grid } from "@mui/material";
import { DealerContent } from "../tabContents/new/DealerContent";
import { DealerSearchHeader } from "../searchHeader/DealerSearchHeader";

export const DealerTabs = () => {
  return (
    <Grid marginTop={6}>
      <DealerSearchHeader />
      <DealerContent />
    </Grid>
  );
};
