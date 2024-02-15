import { Grid } from "@mui/material";
import React from "react";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import { useForm } from "react-hook-form";
import DataTable from "../../views/customers/dataTable/DataTable";

const defaultValues = {
  name: "",
  status: "",
};

const Customers = () => {
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

Customers.authGuard = true;
Customers.guestGuard = false;

export default Customers;
