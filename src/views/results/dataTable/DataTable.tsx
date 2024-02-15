import { Card, CardHeader, Grid, Theme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/results";
import { results } from "@/dummy/results";

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
        title={"Results"}
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
          rows={results as any}
          paginationMode="server"
          paginationModel={params}
          onPaginationModelChange={setParams}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 15 } },
          }}
        />
      </Grid>
    </Card>
  );
};

export default DataTable;
