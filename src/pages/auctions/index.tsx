import { Grid } from "@mui/material";
import React from "react";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import { useForm } from "react-hook-form";
import DataTable from "../../views/auctions/dataTable/DataTable";

const Auctions = () => {
  const { control } = useForm();
  return (
    <Grid>
      <SearchHeaders control={control} />
      <DataTable />
    </Grid>
  );
};

Auctions.authGuard = true;
Auctions.guestGuard = false;

export default Auctions;
