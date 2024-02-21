import { Card, CardHeader, Grid, Theme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/otb";
import { otb } from "@/dummy/otb";
import { filterObjects } from "@/utils/filter-objects";
import { addKey } from "@/utils/add-key";
import { useGetCars } from "@/services/cars/list/get";

const DataTable = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );
  const defaultRowHeight = 55;

  const columns = useColumns();
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });

  const { data: carsData, isLoading } = useGetCars({
    params,
  });
  const carWithoutId = carsData?.data?.data;
  const filteredCars = filterObjects(carWithoutId);
  const cars = addKey(filteredCars, "id", "_id");
  console.log(cars)
  
  return (
    <Card>
      <CardHeader
        sx={{ p: 2 }}
        titleTypographyProps={{ variant: "h6" }}
        title={"OTB"}
      ></CardHeader>
      <Grid padding={2}>
        <DataGrid
          autoHeight
          pagination
          getRowHeight={() => {
            return isSmallScreen ? defaultRowHeight / 2 : defaultRowHeight;
          }}
          columnHeaderHeight={55}
          disableRowSelectionOnClick
          disableColumnSelector
          columns={columns}
          rows={otb as any}
          loading={isLoading}
          rowCount={10}
          paginationMode="server"
          paginationModel={params}
          onPaginationModelChange={setParams}
          // initialState={{
          //   pagination: { paginationModel: { page: 1, pageSize: 10 } },
          // }}
        />
      </Grid>
    </Card>
  );
};

export default DataTable;
