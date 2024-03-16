import { Grid } from "@mui/material";
import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import ErrorBox from "../utility/ErrorBox";
import { DateTimePicker } from "@mui/x-date-pickers";

interface TimePickerProps {
  id: string;
  control: Control<any>;
  error: FieldError;
  label?: string;
  defaultValue?: Date;
  todayByDefault?: boolean;
}

const TimePickerForm = (props: TimePickerProps) => {
  const { id, control, error, label, defaultValue, todayByDefault } = props;
  const today = new Date();
  return (
    <Grid width={"100%"}>
      <Controller
        name={id}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DateTimePicker
            value={value}
            onChange={(e) => onChange(e)}
            minDate={today}
            label={label ?? "Date and Time"}
            format="dd/MM/yyyy HH:mm"
            defaultValue={
              defaultValue ? defaultValue : todayByDefault ? today : null
            }
            sx={{ width: "100%" }}
          />
        )}
      />
      {error && <ErrorBox error={error} />}
    </Grid>
  );
};

export default TimePickerForm;
