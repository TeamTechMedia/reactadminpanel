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
import { useAddEvaluators } from "@/services/evaluators/create/post";
import { EvaluatorsCreateResponseData } from "@/services/evaluators/create/types";
import { useQueryClient } from "@tanstack/react-query";
import EvaluatorSuccessModal from "../modals/EvaluatorSuccessModal";

const defaultValues = {
  fullName: "",
  contactNumber: "",
  email: "",
  location: "",
};

const DataTable = () => {
  const [params, setParams] = useState<EvaluatorsGetParams>({
    page: 0,
    pageSize: 10,
    role: "EVALUATOR",
  });
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState({});

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

  const addEvaluator = useAddEvaluators();
  const queryClient = useQueryClient();

  function handleClick() {
    setOpen(!open);
    reset();
    setSuccessMsg({});
  }

  function onSubmit(val: EvaluatorAddFormType) {
    const body = {
      ...val,
      role: "EVALUATOR",
    };
    addEvaluator.mutate(body, {
      onSuccess: (res) => handleSuccess(res.data.data?.[0]),
    });
  }

  function handleSuccess(res: EvaluatorsCreateResponseData) {
    handleClick();
    queryClient.invalidateQueries({
      queryKey: ["evaluators"],
    });
    setSuccessMsg(res);
    setOpenSuccess(!openSuccess);
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
        apiError={addEvaluator.error}
      />
      <EvaluatorSuccessModal
        open={openSuccess}
        setOpen={setOpenSuccess}
        successMsg={successMsg}
      />
    </>
  );
};

export default DataTable;
