import TabList from "@/components/ui/tabs/TabList";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { CarTabTypes } from "@/types/cars/car";
import CarDetails from "./components/tableData/CarDetails";
import CarDocuments from "./components/tableData/CarDocuments";
import { useRouter } from "next/router";
import { useGetCar } from "@/services/cars/view/get";
import FallbackSpinner from "@/components/ui/spinner/fallback";
import { CarData } from "@/services/cars/list/types";

const tabs = [
  {
    label: "Car Details",
    value: "car_details",
  },
  {
    label: "Documents",
    value: "documents",
  },
];

const CarsView = () => {
  const [value, setValue] = useState(tabs[0].value);
  const router = useRouter();
  const { data: car, isLoading } = useGetCar(router.query.id as string);
  const carData = car?.data?.data?.[0] as CarData;

  const tabComponents = {
    car_details: <CarDetails details={carData} />,
    documents: <CarDocuments />,
  };

  if (isLoading) {
    return <FallbackSpinner />;
  }

  return (
    <>
      <Grid>
        <Grid paddingY={4}>
          <TabList tabOptions={tabs} value={value} setValue={setValue} />
        </Grid>
        <Grid mt={1}>{tabComponents[value as CarTabTypes]}</Grid>
        <Grid mt={4} display={"flex"} gap={3}>
          <Button variant="contained">Approve QC</Button>
          <Button color="error" variant="outlined">
            Reject QC
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CarsView;
