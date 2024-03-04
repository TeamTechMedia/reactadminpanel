import { Grid } from "@mui/material";
import CarEvaluation from "./CarEvaluation";
import { useRouter } from "next/router";
import { useGetCarDocs } from "@/services/cars/documents/get";
import CarDocsCard from "./CarDocsCard";
import { getCarDocuments } from "@/functions/cars/get-car-documents";
import getCarDocData from "@/functions/cars/get-car-doc-data";
import getCarEvaluation from "@/functions/cars/get-car-evaluation";

const CarDocuments = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data: carDocsData, isFetched } = useGetCarDocs(id as string);
  const carDocs = carDocsData?.data.data;
  const docData = getCarDocuments(carDocs);
  const { documents } = getCarDocData(carDocs);
  const { evaluation } = getCarEvaluation();

  return (
    <Grid display={"flex"} flexDirection={"column"} gap={2}>
      {/* Basic Car Details  */}
      <CarEvaluation data={evaluation} title="Evaluation" />
      {/* Document Details  */}
      <CarEvaluation data={documents} title="Documents" />
      {/* Documents  */}
      {isFetched && <CarDocsCard documents={docData} />}
    </Grid>
  );
};

export default CarDocuments;
