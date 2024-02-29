import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/evaluators";
import { useGetEvaluators } from "@/services/evaluators/list/get";
import { EvaluatorsGetParams } from "@/services/evaluators/list/types";
import { addKey } from "@/utils/add-key";

interface DataTableProps {
  handleAdd: () => void;
}

const DataTable = (props: DataTableProps) => {
  const { handleAdd } = props;
  const [params, setParams] = useState<EvaluatorsGetParams>({
    page: 0,
    pageSize: 10,
    role: "EVALUATOR",
  });
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState({});

  const columns = useColumns();

  const { data: evaluators, isLoading } = useGetEvaluators({
    params,
  });
  const data = evaluators?.data?.data;
  const dataWithId = addKey(data, "id", "_id") || [];
  const totalEntries = evaluators?.data?.count || 0;

  return (
    <>
      <Card>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography padding={2} variant="h6">
            Evaluators
          </Typography>
          <Grid padding={2}>
            <Button onClick={handleAdd} variant="contained">
              Add New
            </Button>
          </Grid>
        </Grid>
        <Grid padding={2}>
          <DataGrid
            autoHeight
            pagination
            rowHeight={55}
            columnHeaderHeight={55}
            disableRowSelectionOnClick
            disableColumnSelector
            columns={columns}
            rows={dataWithId ?? []}
            rowCount={totalEntries}
            loading={isLoading}
            paginationMode="server"
            paginationModel={params}
            onPaginationModelChange={setParams}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 15 } },
            }}
          />
        </Grid>
      </Card>
    </>
  );
};

export default DataTable;
