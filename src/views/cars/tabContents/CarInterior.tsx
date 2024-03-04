import React from "react";
import { CarReportData } from "@/services/cars/report/types";
import { Grid } from "@mui/material";
import CarDocsCard from "./CarDocsCard";
import CarEvaluation from "./CarEvaluation";
import filterDocuments from "@/utils/filter-documents";
import getCarInterior from "@/functions/cars/get-car-interior";

interface CarInteriorProps {
  details?: CarReportData;
}

const CarInterior = (props: CarInteriorProps) => {
  const { details } = props;
  if (details) {
    const { interior } = getCarInterior(details);
    const documents = filterDocuments(interior);
    return (
      <Grid display={"flex"} flexDirection={"column"} gap={3}>
        <CarEvaluation data={interior} title="Interior" />
        {documents && <CarDocsCard documents={documents as any} />}
      </Grid>
    );
  }
};

export default CarInterior;
