import React from "react";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import DataTable from "../../views/cars/dataTable/DataTable";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

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
