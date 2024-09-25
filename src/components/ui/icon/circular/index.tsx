import { Grid } from "@mui/material";
import Image from "next/image";

type Props = {
  icon: string;
};

export const CircularIcon = (props: Props) => {
  const { icon } = props;
  return (
    <Grid
      sx={{ backgroundColor: "#F4F7FE", borderRadius: "50%", padding: 2 }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image src={icon} alt="icon" height={38} width={38} />
    </Grid>
  );
};
