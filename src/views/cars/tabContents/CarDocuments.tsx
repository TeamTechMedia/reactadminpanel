import { Grid } from "@mui/material";
import CarEvaluation from "./CarEvaluation";
import { useRouter } from "next/router";
import { useGetCarDocs } from "@/services/cars/documents/get";
import CarDocsCard from "./CarDocsCard";
import { getCarDocuments } from "@/functions/cars/get-car-documents";
import getCarDocData from "@/functions/cars/get-car-doc-data";
import getCarEvaluation from "@/functions/cars/get-car-evaluation";
import { CarReportData } from "@/services/cars/report/types";

interface CarDocsProps {
  details?: CarReportData;
}

const CarDocuments = (props: CarDocsProps) => {
  const { details } = props;
  const router = useRouter();
  const id = router.query.id;
  const { data: carDocsData, isFetched } = useGetCarDocs(id as string);
  const carDocs = carDocsData?.data.data;
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
