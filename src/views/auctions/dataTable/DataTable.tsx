import { Card, CardHeader, Grid, Theme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { auction } from "@/dummy/auction";
import useColumns from "@/hooks/columns/auctions";

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
          rows={auction as any}
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
