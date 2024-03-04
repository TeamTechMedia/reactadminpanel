import React from "react";
import { CarReportData } from "@/services/cars/report/types";
import getCarExterior from "@/functions/cars/get-car-exterior";
import { Grid } from "@mui/material";
import CarDocsCard from "./CarDocsCard";
import CarEvaluation from "./CarEvaluation";
import filterDocuments from "@/utils/filter-documents";

interface CarExteriorProps {
  details?: CarReportData;
}

const CarExterior = (props: CarExteriorProps) => {
  const { details } = props;
  if (details) {
    const { exterior } = getCarExterior(details);
    const documents = filterDocuments(exterior);
    return (
      <Grid display={"flex"} flexDirection={"column"} gap={3}>
        <CarEvaluation data={exterior} title="Exterior" />
        {documents && <CarDocsCard documents={documents as any} />}
      </Grid>
    );
  }
};

export default CarExterior;
