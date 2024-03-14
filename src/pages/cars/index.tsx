import DataTable from "../../views/cars/dataTable/DataTable";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import SearchHeaders from "@/views/cars/search/SearchHeader";

const Cars = () => {
  const { control, watch } = useForm();
  const [search] = watch(["search"]);
  const params = { search };

  return (
    <Grid>
      <SearchHeaders control={control} />
      <DataTable control={control} postQueryParams={params} />
    </Grid>
  );
};

Cars.authGuard = true;
Cars.guestGuard = false;

export default Cars;
