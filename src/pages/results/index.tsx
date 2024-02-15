import React from "react";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import DataTable from "../../views/results/dataTable/DataTable";

const Results = () => {
  const { control } = useForm();
  return (
    <Grid>
      <SearchHeaders control={control} />
      <DataTable />
    </Grid>
  );
};

Results.authGuard = true;
Results.guestGuard = false;

export default Results;
