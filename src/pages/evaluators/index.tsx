import { Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import DataTable from "../../views/evaluators/dataTable/DataTable";

const defaultValues = {
  name: "",
  status: "",
};

const Evaluators = () => {
  const { control } = useForm({
    defaultValues,
  });

  return (
    <Grid>
      <SearchHeaders control={control} />
      <DataTable />
    </Grid>
  );
};

Evaluators.authGuard = true;
Evaluators.guestGuard = false;

export default Evaluators;
