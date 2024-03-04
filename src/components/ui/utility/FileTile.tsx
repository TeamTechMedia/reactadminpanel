import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { ButtonIcon } from "../buttons/ButtonIcon";
import { DocumentsType } from "@/types/documents/fileTile";
import fileThumbnail from "../../../../public/assets/file-thumbnail.svg";

interface FileTileProps {
  file: DocumentsType;
  handleEdit?: (file: DocumentsType) => void;
}

export const FileTile = (fileTileProps: FileTileProps) => {
  const { file, handleEdit } = fileTileProps;
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  const opacity = isHovered ? 1 : "";
  const backgroundColor = isHovered ? "#000" : "";
  const transition = isHovered ? "background-color 0.3s ease" : "";

  function handleView(file: DocumentsType) {
    const linkElement = document.createElement("a");
    linkElement.href = file.downloadLink;
    linkElement.target = "_blank";
    linkElement.click();
  }

  return (
    <Box onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Grid
        position={"relative"}
        display={"flex"}
        sx={{ opacity, backgroundColor, transition }}
      >
        <Image
          loading="lazy"
          src={file.thumbnail || fileThumbnail}
          alt={"file"}
          width={100}
          height={100}
          unoptimized
        />
        {isHovered && (
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
              onClick={() => handleView(file)}
              icon="tabler:eye"
              color="white"
            />
            {/* <ButtonIcon
              onClick={() => handleDownload(file)}
              icon="tabler:download"
              color="white"
            /> */}
            {handleEdit && (
              <ButtonIcon
                onClick={() => handleEdit(file)}
                icon="tabler:edit"
                color="white"
              />
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
