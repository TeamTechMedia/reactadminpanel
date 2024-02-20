import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import FileThumbNail from "../../../../public/assets/file-thumbnail.svg";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";

const FileTileCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  const opacity = isHovered ? 1 : "";
  const backgroundColor = isHovered ? "#000" : "";
  const transition = isHovered ? "background-color 0.3s ease" : "";
  return (
    <Box onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Grid
        position={"relative"}
        display={"flex"}
        sx={{ opacity, backgroundColor, transition }}
      >
        <Image loading="lazy" src={FileThumbNail} alt={"file"} />
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
            {" "}
            <ButtonIcon icon="tabler:eye" color="white" />
            <ButtonIcon icon="tabler:download" color="white" />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

const DocumentCard = () => {
  return (
    <Grid display={"flex"}>
      <Grid
        display={"flex"}
        padding={1}
        border={2}
        borderColor={"#D9D9D9"}
        borderRadius={1}
      >
        <FileTileCard />
      </Grid>
    </Grid>
  );
};

const CarDocuments = () => {
  // Example document data
  const documents = [
    {
      type: "PAN Card",
      thumbnail: "pan_card_thumbnail.jpg",
      downloadLink: "pan_card_download_link.pdf",
    },
    {
      type: "Address Proof",
      thumbnail: "address_proof_thumbnail.jpg",
      downloadLink: "address_proof_download_link.pdf",
    },
    {
      type: "Voter ID",
      thumbnail: "voter_id_thumbnail.jpg",
      downloadLink: "voter_id_download_link.pdf",
    },
    {
      type: "Dealer Proof",
      thumbnail: "dealer_proof_thumbnail.jpg",
      downloadLink: "dealer_proof_download_link.pdf",
    },
  ];

  return (
    <Card>
      <CardContent sx={{ display: "flex", gap: 5 }}>
        {documents.map((doc, index) => (
          <Grid
            key={doc.type}
            display={"flex"}
            gap={1}
            flexDirection={"column"}
          >
            <Typography fontSize={17} fontWeight={500}>
              {doc.type}
            </Typography>
            <DocumentCard key={index} />
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
};

export default CarDocuments;
