import { useColumns } from "@/hooks/columns/live-otb-log";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

interface Props {
  log: any;
}

export default function OtbLogDataGrid(props: Props) {
  const { log } = props;
  const columns = useColumns();
  return (
    <Grid>
      <DataGrid
        columns={columns}
        rows={log ?? []}
        disableColumnSelector
        rowSelection={false}
        pageSizeOptions={[]}
        sx={{
          height: 350,
        }}
      />
    </Grid>
  );
}
