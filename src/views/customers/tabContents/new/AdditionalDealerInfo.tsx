import { Grid, Typography } from "@mui/material";
import { ContactInfo } from "./ContactInfo";

export const AdditionalDealerInfo = () => {
  return (
    <Grid marginTop={6}>
      <Typography fontWeight={600} fontSize={18} paddingBottom={2}>
        Additional Information
      </Typography>

      <ContactInfo />
    </Grid>
  );
};
