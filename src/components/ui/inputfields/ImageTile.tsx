import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { ButtonIcon } from "../buttons/ButtonIcon";
import fileThumbnail from "../../../../public/assets/file-thumbnail.svg";

interface Props {
  url: string;
}

export const ImageTile = (props: Props) => {
  const { url } = props;
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  const opacity = isHovered ? 1 : "";
  const backgroundColor = isHovered ? "#000" : "";
  const transition = isHovered ? "background-color 0.3s ease" : "";
  return (
    <Box
      display={"flex"}
      padding={1}
      border={2}
      borderColor={"#D9D9D9"}
      borderRadius={1}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Grid
        position={"relative"}
        display={"flex"}
        sx={{ opacity, backgroundColor, transition, border: "1px " }}
      >
        <Image
          loading="lazy"
          src={fileThumbnail}
          alt={"file"}
          width={100}
          height={100}
        />
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
        >
          <ButtonIcon
            onClick={() => {
              return 0;
            }}
            icon={url ? "tabler:eye" : "tabler:plus"}
            color="white"
            fontSize={30}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
