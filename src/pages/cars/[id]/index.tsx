import TabList from "@/components/ui/tabs/TabList";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { CarTabTypes } from "@/types/cars/car";
import CarDetails from "./components/tableData/CarDetails";
import CarDocuments from "./components/tableData/CarDocuments";

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

  const tabComponents = {
    car_details: <CarDetails />,
    documents: <CarDocuments />,
  };

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
