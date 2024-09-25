import { Button, Grid, Typography } from "@mui/material";

interface Props {
  heading: string;
  subHeading: string;
  btnText?: string;
  handleBtnClick?: () => void;
}

export const DealerCardContent = (props: Props) => {
  const { heading, subHeading, btnText, handleBtnClick } = props;
  return (
    <Grid
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        gap={1}
      >
        <Typography fontWeight={600} fontSize={16}>
          {heading}
        </Typography>
        <Typography color={"GrayText"} fontSize={16}>
          {subHeading}
        </Typography>
      </Grid>

      {btnText && (
        <Button onClick={handleBtnClick} variant="contained">
          {btnText}
        </Button>
      )}
    </Grid>
  );
};
