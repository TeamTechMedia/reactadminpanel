import { Chip, Grid, Typography } from "@mui/material";

export const NotesDisplayContainer = ({
  notes,
  time,
}: {
  notes: string;
  time: string;
}) => {
  return (
    <Grid display={"flex"} p={2} sx={{ backgroundColor: "ButtonFace" }}>
      <Grid display={"flex"} flexDirection={"column"} gap={1}>
        <Chip label={String(time)} color="info" />
        <Typography>{notes}</Typography>
      </Grid>
    </Grid>
  );
};
