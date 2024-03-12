import { Grid } from "@mui/material";
import CarEvaluation from "./CarEvaluation";
import CarDocsCard from "./CarDocsCard";
import { getCarDocuments } from "@/functions/cars/get-car-documents";
import getCarDocData from "@/functions/cars/get-car-doc-data";
import getCarEvaluation from "@/functions/cars/get-car-evaluation";
import { CarReportData } from "@/services/cars/report/types";
import { CarDocs } from "@/services/cars/documents/types";

interface CarDocsProps {
  details?: CarReportData;
  carDocs?: CarDocs;
  isFetched: boolean;
}

const CarDocuments = (props: CarDocsProps) => {
  const { details, carDocs, isFetched } = props;
  const docData = getCarDocuments(carDocs);
  const { documents } = getCarDocData(carDocs);
  const { evaluation } = getCarEvaluation(details as any);

  return (
    <Grid display={"flex"} flexDirection={"column"} gap={2}>
      <CarEvaluation data={evaluation} title="Evaluation" />
      <CarEvaluation data={documents} title="Documents" />
      {isFetched && <CarDocsCard documents={docData} />}
    </Grid>
  );
};

export default CarDocuments;
