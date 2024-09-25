import useColumns from "@/hooks/columns/dealers";
import { DealerContext, DealerContextType } from "@/pages/dealers";
import { addKey } from "@/utils/add-key";
import { Card, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";

export const DealerDataGrid = () => {
  const columns = useColumns();
  const propParams = useContext<DealerContextType>(DealerContext);
  const { params, setParams, data, isLoading } = propParams as any;
  const dataWithId = addKey(data?.data?.data, "id", "_id") ?? [];
  return (
    <Card>
      <Typography paddingX={2} marginTop={2} variant="h6">
        Dealers
      </Typography>
      <Grid padding={2}>
        <DataGrid
          autoHeight
          pagination
          columnHeaderHeight={55}
          disableRowSelectionOnClick
          disableColumnSelector
          columns={columns}
          rows={(dataWithId as any) ?? []}
          rowCount={data?.data?.count ?? 10000}
          loading={isLoading}
          paginationMode="server"
          paginationModel={params}
          onPaginationModelChange={setParams}
        />
      </Grid>
    </Card>
  );
};
