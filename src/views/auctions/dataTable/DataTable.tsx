import { Card, CardHeader, Grid, Theme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "@/hooks/columns/auctions";
import { useGetCars } from "@/services/cars/list/get";
import { addKey } from "@/utils/add-key";

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
  const { data: auctions } = useGetCars({
    params: { ...params, status: "LIVE" },
  });
  const auctionData = auctions?.data.data || [];
  const auctionsArray = addKey(auctionData, "id", "_id");

  return (
    <Card>
      <CardHeader
        sx={{ p: 2 }}
        titleTypographyProps={{ variant: "h6" }}
        title={"Auctions"}
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
          rows={auctionsArray as any}
          rowCount={auctions?.data.count ?? 0}
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
