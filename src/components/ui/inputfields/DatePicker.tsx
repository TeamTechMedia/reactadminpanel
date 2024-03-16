import { FormControl, Grid } from "@mui/material";
import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import ErrorBox from "../utility/ErrorBox";
import { DatePicker } from "@mui/x-date-pickers";

interface DatePickerProps {
  id: string;
  control: Control<any>;
  error?: FieldError;
  label?: string;
  defaultValue?: Date;
  todayByDefault?: boolean;
  minDate?: Date;
  maxDate?: Date;
  handleChange?: (e: any) => void;
}

const DatePickerForm = (props: DatePickerProps) => {
  const {
    id,
    control,
    error,
    label,
    defaultValue,
    todayByDefault,
    minDate,
    maxDate,
    handleChange,
  } = props;
  const today = new Date();
  return (
    <Grid width={"100%"}>
      <Controller
        name={id}
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormControl size="small">
            <DatePicker
              value={value}
              onChange={(e) => {
                onChange(e);
                handleChange && handleChange(e);
              }}
              minDate={minDate ?? null}
              maxDate={maxDate ?? null}
              label={label ?? "Date"}
              format="dd/MM/yyyy"
              defaultValue={
                defaultValue ? defaultValue : todayByDefault ? today : null
              }
              sx={{ width: "100%" }}
            />
          </FormControl>
        )}
      />
      {error && <ErrorBox error={error} />}
    </Grid>
  );
};

export default DatePickerForm;
