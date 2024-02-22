import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/evaluators";
import { useGetEvaluators } from "@/services/evaluators/list/get";
import { EvaluatorsGetParams } from "@/services/evaluators/list/types";
import { addKey } from "@/utils/add-key";
import EvaluatorDrawer from "../drawer/EvaluatorDrawer";
import { useForm } from "react-hook-form";
import { EvaluatorAddFormType } from "@/types/evaluators/formTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormSchema } from "@/hooks/schema/evaluators";

const defaultValues = {
  fullName: "",
  contactNumber: "",
  email: "",
  location: "",
};

const DataTable = () => {
  // States
  const [params, setParams] = useState<EvaluatorsGetParams>({
    page: 0,
    pageSize: 10,
    role: "EVALUATOR",
  });
  const [open, setOpen] = useState(false);
  // Hooks
  const columns = useColumns();
  const schema = useFormSchema();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EvaluatorAddFormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { data: evaluators, isLoading } = useGetEvaluators({
    params,
  });
  const data = evaluators?.data?.data;
  const dataWithId = addKey(data, "id", "_id") || [];

  function handleClick() {
    setOpen(!open);
    reset();
  }

  function onSubmit(val: EvaluatorAddFormType) {
    console.log(val, "values");
  }

  return (
    <>
      <Card>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography padding={2} variant="h6">
            Evaluators
          </Typography>
          <Grid padding={2}>
            <Button onClick={handleClick} variant="contained">
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
      <EvaluatorDrawer
        open={open}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        errors={errors}
      />
    </>
  );
};

export default DataTable;
