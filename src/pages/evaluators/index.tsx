import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SearchHeaders from "../../views/customers/searchHeader/SearchHeaders";
import DataTable from "../../views/evaluators/dataTable/DataTable";
import EvaluatorDrawer from "@/views/evaluators/drawer/EvaluatorDrawer";
import EvaluatorSuccessModal from "@/views/evaluators/modals/EvaluatorSuccessModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { EvaluatorAddFormType } from "@/types/evaluators/formTypes";
import { useFormSchema } from "@/hooks/schema/evaluators";
import { EvaluatorsCreateResponseData } from "@/services/evaluators/create/types";
import { useAddEvaluators } from "@/services/evaluators/create/post";
import { useQueryClient } from "@tanstack/react-query";

const defaultValues = {
  name: "",
  status: "",
};

const defaultEvalValues = {
  fullName: "",
  contactNumber: "",
  email: "",
  location: "",
};

const Evaluators = () => {
  const { control } = useForm({
    defaultValues,
  });
  const schema = useFormSchema();

  const {
    control: controlEvaluator,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EvaluatorAddFormType>({
    defaultValues: defaultEvalValues,
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState({});

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
    <Grid>
      <SearchHeaders control={control} />
      <DataTable handleAdd={handleClick} />
      <EvaluatorDrawer
        open={open}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={controlEvaluator}
        errors={errors}
        apiError={addEvaluator.error}
      />
      <EvaluatorSuccessModal
        open={openSuccess}
        setOpen={setOpenSuccess}
        successMsg={successMsg}
      />
    </Grid>
  );
};

Evaluators.authGuard = true;
Evaluators.guestGuard = false;

export default Evaluators;
