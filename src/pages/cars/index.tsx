import React from "react";
import DataTable from "../../views/cars/dataTable/DataTable";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import SearchHeaders from "@/views/cars/search/SearchHeader";

const Cars = () => {
  const { control } = useForm();
  return (
    <Grid>
      <SearchHeaders control={control} />
      <DataTable />
    </Grid>
  );
};

Cars.authGuard = true;
Cars.guestGuard = false;

export default Cars;
