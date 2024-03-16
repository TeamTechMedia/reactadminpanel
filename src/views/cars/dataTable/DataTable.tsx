import { Card, CardHeader, Grid } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/cars";
import { useGetCars } from "@/services/cars/list/get";
import { filterObjects } from "@/utils/filter-objects";
import { addKey } from "@/utils/add-key";
import { Control } from "react-hook-form";
import { CarData, CarDataSearchParams } from "@/services/cars/list/types";
import usePostSearchCars from "@/hooks/actions/cars/post-search";
import { useSearchCars } from "@/services/cars/list/post";

interface CarDataTableProps {
  control: Control<CarDataSearchParams>;
  postQueryParams: { search: string; createdAt?: Date };
}

const DataTable = (carDataTableProps: CarDataTableProps) => {
  const { postQueryParams } = carDataTableProps;
  const { search } = postQueryParams;
  const isSearch = Boolean(search) && search !== "";
  const columns = useColumns({
    handleSort,
  });
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });
  const [carPostData, setCarPostData] = useState<CarData[]>([]);
  const { data: carsData, isLoading } = useGetCars({
    params,
  });
  const carWithoutId = carsData?.data?.data;
  const filteredCars = filterObjects(carWithoutId);
  const cars = addKey(filteredCars, "id", "_id");
  const carsPostData = addKey(carPostData, "id", "_id");

  const postSearch = useSearchCars();
  usePostSearchCars({
    search,
    setCarPostData,
    postSearch,
  });

  function handleSort() {
    setParams(() => ({
      ...params,
      sortKey: "createdAt",
    }));
  }

  return (
    <Card>
      <CardHeader
        sx={{ p: 2 }}
        titleTypographyProps={{ variant: "h6" }}
        title={"Cars"}
      ></CardHeader>
      <Grid padding={2}>
        <DataGrid
          autoHeight
          pagination
          columnHeaderHeight={55}
          disableRowSelectionOnClick
          disableColumnSelector
          columns={(columns as any) ?? []}
          loading={isLoading || postSearch.isPending}
          rows={isSearch ? carsPostData : (cars as any) ?? []}
          rowCount={carsData?.data.count ?? 0}
          paginationMode="server"
          paginationModel={params}
          onPaginationModelChange={setParams}
        />
      </Grid>
    </Card>
  );
};

export default DataTable;
