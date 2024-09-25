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
          url: data?.data?.images ?? "asdd",
        },
        {
          label: "Back Image",
          url: "",
        },
      ],
    },
    {
      name: "PAN Card",
      images: [
        {
          label: "PAN Image",
          url: "www.pancard.com",
        },
      ],
    },
    {
      name: "Dealership Image",
      images: [
        {
          label: "Shop Image",
          url: "",
        },
        {
          label: "Visiting Card",
          url: "",
        },
      ],
    },
    {
      name: "Cancelled Cheque",
      images: [
        {
          label: "Image",
          url: "",
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
