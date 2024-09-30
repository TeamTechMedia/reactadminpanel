import React from "react";
import { Card } from "@mui/material";
import DealerDocs from "./DealerDocs";

interface DataProps {
  data: any;
}

const DealerDocuments = (props: DataProps) => {
  const { data } = props;
  const documents = [
    {
      name: "Aadar Card",
      images: [
        {
          label: "Front Image",
          url: data?.addressProofFront?.url,
        },
        {
          label: "Back Image",
          url: data?.addressProofBack?.url,
        },
      ],
    },
    {
      name: "PAN Card",
      images: [
        {
          label: "PAN Image",
          url: data?.panCard?.url,
        },
      ],
    },
    {
      name: "Dealership Image",
      images: [
        {
          label: "Shop Image",
          url: data?.shopPicture?.url,
        },
        {
          label: "Visiting Card",
          url: data?.visitingCard?.url,
        },
      ],
    },
    {
      name: "Cancelled Cheque",
      images: [
        {
          label: "Cheque Image",
          url: data?.canceledCheque?.url,
        },
      ],
    },
  ];
  return (
    <Card>
      <DealerDocs documents={documents} />
    </Card>
  );
};

export default DealerDocuments;
