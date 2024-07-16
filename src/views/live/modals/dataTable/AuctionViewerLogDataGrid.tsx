import { useColumns } from "@/hooks/columns/viewers-auction-log";
import { addKey } from "@/utils/add-key";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

interface Props {
  data: any;
}

function AuctionViewerLogDataGrid(props: Props) {
  const { data } = props;
  const columns = useColumns();
  const watchList = addKey(data, "id", "_id");
  return (
    <Grid>
      <DataGrid
        columns={columns}
        rows={(watchList as any) ?? []}
        disableColumnSelector
        rowSelection={false}
        pageSizeOptions={[]}
      />
    </Grid>
  );
}

export default AuctionViewerLogDataGrid;