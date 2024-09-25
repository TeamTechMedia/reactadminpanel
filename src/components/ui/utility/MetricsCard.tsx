import { Card, Grid, Typography } from "@mui/material";
import { CircularIcon } from "../icon/circular";

interface Props {
  label: string;
  value: number | string;
  icon: string;
}

export const HighlightedDigits = ({ text }: { text: number }) => {
  return (
    <Typography fontSize={24} fontWeight={700} color={"#3C464D"}>
      {text}
    </Typography>
  );
};

export const MetricsCard = (props: Props) => {
  const { label, value, icon } = props;
  return (
    <Card
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.15)",
        display: "flex",
        gap: 2,
        padding: "20px",
        alignItems: "center",
      }}
    >
      <Grid>
        <CircularIcon icon={icon} />
      </Grid>
      <Grid>
        <Typography
          color={"rgba(114, 113, 113, 0.80)"}
          fontSize={14}
          fontWeight={500}
        >
          {label}{" "}
        </Typography>
        <HighlightedDigits text={Number(value)} />
      </Grid>
    </Card>
  );
};
