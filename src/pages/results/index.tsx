import React from "react";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import DataTable from "../../views/results/dataTable/DataTable";

const Results = () => {
  const { control, watch } = useForm();
  const [search] = watch(["search"]);
  return (
    <Grid>
      <SearchHeaders control={control} />
      <DataTable searchText={search} />
    </Grid>
  );
};

Results.authGuard = true;
Results.guestGuard = false;

export default Results;
