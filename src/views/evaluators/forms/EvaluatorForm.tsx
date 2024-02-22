import TextFormField from "@/components/ui/inputfields/TextFormField";
import ErrorBox from "@/components/ui/utility/ErrorBox";
import { EvaluatorAddFormType } from "@/types/evaluators/formTypes";
import { Grid } from "@mui/material";
import React from "react";
import { Control, FieldErrors } from "react-hook-form";

type EvaluatorFormProps = {
  control: Control<any>;
  errors: FieldErrors<EvaluatorAddFormType>;
};

const EvaluatorForm = (props: EvaluatorFormProps) => {
  const { control, errors } = props;
  return (
    <>
      <Grid item xs={12}>
        <TextFormField
          size="medium"
          control={control}
          id="fullName"
          label="Name"
          placeholder="Enter Name"
          required
        />
        {errors.fullName && <ErrorBox error={errors.fullName} />}
      </Grid>
      <Grid item xs={12}>
        <TextFormField
          size="medium"
          control={control}
          id="contactNumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
          type="tel"
          required
        />
        {errors.contactNumber && <ErrorBox error={errors.contactNumber} />}
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
    </>
  );
};

export default EvaluatorForm;
