import React from "react";
import { CarReportData } from "@/services/cars/report/types";
import { Grid } from "@mui/material";
import CarDocsCard from "./CarDocsCard";
import CarEvaluation from "./CarEvaluation";
import filterDocuments from "@/utils/filter-documents";
import getCarOther from "@/functions/cars/get-car-other";

interface CarOtherProps {
  details?: CarReportData;
}

const CarOther = (props: CarOtherProps) => {
  const { details } = props;
  if (details) {
    const {
      testDrive,
      features,
      airConditioning,
      specialComments,
      manualRating,
    } = getCarOther(details);
    const documents = filterDocuments(testDrive);

    return (
      <Grid display={"flex"} flexDirection={"column"} gap={3}>
        <CarEvaluation data={testDrive} title="Test Drive" />
        <CarEvaluation data={features} title="Features" />
        <CarEvaluation data={airConditioning} title="Air Conditioning" />
        <CarEvaluation data={specialComments} title="Special Comments" />
        <CarEvaluation data={manualRating} title="Manual Rating" />
        <CarDocsCard documents={documents as any} />
      </Grid>
    );
  }
};

export default CarOther;
