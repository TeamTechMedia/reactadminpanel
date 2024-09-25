import { Grid } from "@mui/material";

export const BorderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      sx={{
        border: "0.5px solid rgba(224, 224, 224, 1)",
        paddingX: 5,
        paddingY: 2,
        display: "flex",
        gap: 4,
      }}
    >
      {children}
    </Grid>
  );
};
