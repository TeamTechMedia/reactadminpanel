import { CarReportData } from "@/services/cars/report/types";
import { Grid } from "@mui/material";
import CarEvaluation from "./CarEvaluation";
import getCarEngine from "@/functions/cars/get-car-engine";
import CarDocsCard from "./CarDocsCard";
import filterDocuments from "@/utils/filter-documents";

interface CarEngineProps {
  details?: CarReportData;
}

const CarEngine = (props: CarEngineProps) => {
  const { details } = props;

  if (details) {
    const { engine } = getCarEngine(details);
    const documents = filterDocuments(engine);
    return (
      <Grid display={"flex"} flexDirection={"column"} gap={3}>
        <CarEvaluation data={engine} title="Engine" />
        <CarDocsCard documents={documents as any} />
      </Grid>
    );
  }
};

export default CarEngine;
