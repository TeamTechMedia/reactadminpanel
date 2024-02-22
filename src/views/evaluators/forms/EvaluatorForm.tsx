import TextFormField from "@/components/ui/inputfields/TextFormField";
import ErrorBox from "@/components/ui/utility/ErrorBox";
import { EvaluatorAddFormType } from "@/types/evaluators/formTypes";
import { Grid } from "@mui/material";
import React from "react";
import { Control, FieldErrors } from "react-hook-form";

type EvaluatorFormProps = {
  control: Control<any>;
  errors: FieldErrors<EvaluatorAddFormType>;
  apiError: any;
};

const EvaluatorForm = (props: EvaluatorFormProps) => {
  const { control, errors, apiError } = props;
  return (
    <>
      <Grid item xs={12}>
        <TextFormField
          size="medium"
          control={control}
          id="fullname"
          label="Name"
          placeholder="Enter Name"
          required
        />
        {errors.fullname && <ErrorBox error={errors.fullname} />}
      </Grid>
      <Grid item xs={12}>
        <TextFormField
          size="medium"
          control={control}
          id="contactNo"
          label="Phone Number"
          placeholder="Enter Phone Number"
          type="tel"
          required
        />
        {errors.contactNo && <ErrorBox error={errors.contactNo} />}
      </Grid>
      <Grid item xs={12}>
        <TextFormField
          size="medium"
          control={control}
          id="email"
          label="Email"
          placeholder="Enter Email"
          type="email"
          required
        />
        {errors.email && <ErrorBox error={errors.email} />}
      </Grid>
      <Grid item xs={12}>
        <TextFormField
          size="medium"
          control={control}
          id="location"
          label="Location"
          placeholder="Enter Location"
          required
        />
        {errors.location && <ErrorBox error={errors.location} />}
      </Grid>
      {apiError && (
        <Grid item xs={12}>
          <ErrorBox error={apiError} />
        </Grid>
      )}
    </>
  );
};

export default EvaluatorForm;
