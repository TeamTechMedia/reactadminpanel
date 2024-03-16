import DataTable from "../../views/cars/dataTable/DataTable";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import SearchHeaders from "@/views/cars/search/SearchHeader";
import { useState } from "react";

const Cars = () => {
  const { control, watch } = useForm();
  const [search] = watch(["search"]);
  const [createdAt, setCreatedAt] = useState<Date | null>(null);
  const params = { search, createdAt };

  return (
    <Grid>
      <SearchHeaders control={control} setDate={setCreatedAt} />
      <DataTable control={control} postQueryParams={params} />
    </Grid>
  );
};

Cars.authGuard = true;
Cars.guestGuard = false;

export default Cars;
