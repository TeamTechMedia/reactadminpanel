import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import RequiredLabel from "../utility/RequiredLabel";
import ErrorBox from "../utility/ErrorBox";

const SelectFormField = ({
  id,
  control,
  required,
  handleOnChange,
  i,
  label,
  placeholder,
  size,
  labelSize,
  isDisabled,
  renderMenuItems,
  data,
  isMultiple,
  fillWhite,
  error,
}: {
  id: string;
  control: Control<any>;
  required?: boolean;
  handleOnChange?: (e: SelectChangeEvent, i?: number) => void;
  i?: number;
  label?: string;
  placeholder?: string;
  size?: "small" | "medium";
  labelSize?: "small" | "normal";
  isDisabled?: boolean;
  renderMenuItems: (obj: any) => void;
  data?: any;
  isMultiple?: boolean;
  fillWhite?: boolean;
  error?: any;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="input-label" size={labelSize ?? "normal"}>
        {label && required ? (
          <RequiredLabel text={label} />
        ) : label ? (
          label
        ) : (
          ""
        )}
      </InputLabel>
      <Controller
        name={id}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Select
            fullWidth
            labelId="input-label"
            disabled={isDisabled}
            label={label ?? ""}
            value={value}
            multiple={isMultiple ? true : false}
            defaultValue={isMultiple ? [] : ""}
            onChange={(e) => {
              onChange(e);
              handleOnChange && handleOnChange(e, i);
            }}
            sx={{
              "& .MuiFormLabel-asterisk": { color: "red" },
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              },
              ...(fillWhite && { backgroundColor: "white" }),
            }}
            MenuProps={{
              autoFocus: false,
              PaperProps: {
                style: {
                  maxHeight: 300,
                  boxSizing: "border-box",
                  marginTop: "2px",
                },
              },
            }}
            onBlur={onBlur}
            size={size ?? "small"}
            placeholder={placeholder ?? ""}
          >
            {data && data?.map((obj: any) => renderMenuItems(obj))}
          </Select>
        )}
      />
      {error && <ErrorBox error={error} />}
    </FormControl>
  );
};

export default SelectFormField;
