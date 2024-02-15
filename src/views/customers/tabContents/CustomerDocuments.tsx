import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Image from "next/image";
import FileThumbNail from "../../../../public/assets/file-thumbnail.svg";

const FileTileCard = () => {
  return (
    <Grid>
      <Grid>
        <Image src={FileThumbNail} alt={"file"} />
      </Grid>
    </Grid>
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

const CustomerDocuments = () => {
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

export default CustomerDocuments;
