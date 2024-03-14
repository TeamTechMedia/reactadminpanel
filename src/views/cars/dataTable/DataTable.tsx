import { Card, CardHeader, Grid } from "@mui/material";
import React, { useDeferredValue, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/cars";
import { useGetCars } from "@/services/cars/list/get";
import { filterObjects } from "@/utils/filter-objects";
import { addKey } from "@/utils/add-key";
import { Control } from "react-hook-form";
import { useSearchCars } from "@/services/cars/list/post";
import { CarDataSearchParams } from "@/services/cars/list/types";

interface CarDataTableProps {
  control: Control<CarDataSearchParams>;
  postQueryParams: { search: string; createdAt?: Date };
}

const DataTable = (carDataTableProps: CarDataTableProps) => {
  const { postQueryParams } = carDataTableProps;
  const { search } = postQueryParams;
  const isSearch = Boolean(search) && search !== "";
  const columns = useColumns();
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });
  const [carPostData, setCarPostData] = useState([]);
  const { data: carsData, isLoading } = useGetCars({
    params,
  });
  const carWithoutId = carsData?.data?.data;
  const filteredCars = filterObjects(carWithoutId);
  const cars = addKey(filteredCars, "id", "_id");
  const carsPostData = addKey(carPostData, "id", "_id");

  const postSearch = useSearchCars();
  const deferredSearch = useDeferredValue<string>(search);

  useEffect(() => {
    if (deferredSearch !== undefined && search) {
      postSearch.mutate(
        {
          lastFourDigits: deferredSearch,
        },
        {
          onSuccess: (res) => {
            setCarPostData(res.data.data);
          },
        },
      );
    }
  }, [deferredSearch]);

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
