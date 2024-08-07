import { Grid, MenuItem } from "@mui/material";
import React, { SetStateAction } from "react";
import TextFormField from "../../../components/ui/inputfields/TextFormField";
import SelectFormField from "../../../components/ui/inputfields/SelectField";
import { Control, UseFormSetValue } from "react-hook-form";
import DatePickerForm from "@/components/ui/inputfields/DatePicker";
import SearchByDropDown from "./SearchByDropDown";
import { statusData } from "@/data/cars/search";

// For AWS

interface SearchHeaderProps {
  control: Control<any>;
  setDate: React.Dispatch<SetStateAction<Date | null>>;
  setValue: UseFormSetValue<{ searchBy: string; search: string }>;
  setStatus: React.Dispatch<SetStateAction<string>>;
}

function renderItem(obj: { id: string; name: string }) {
  return (
    <MenuItem key={obj.id} value={obj.id}>
      {obj.name}
    </MenuItem>
  );
}

const SearchHeaders = (props: SearchHeaderProps) => {
  const { control, setDate, setValue, setStatus } = props;
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      paddingY={4}
    >
      <Grid display={"flex"} gap={2} item xl={7}>
        <TextFormField
          control={control}
          id="search"
          label="Search"
          placeholder="Input Search Text"
          fillWhite
          InputProps={{
            style: { padding: 0 },
            endAdornment: (
              <SearchByDropDown control={control} setValue={setValue} />
            ),
          }}
        />
        <DatePickerForm
          control={control}
          id="createdAt"
          handleChange={(e) => setDate(e)}
          fillWhite
        />
      </Grid>
      <Grid display={"flex"} gap={2} item xl={2} md={2} xs={4}>
        <SelectFormField
          control={control}
          id="status"
          renderMenuItems={renderItem}
          data={statusData}
          label="Status"
          labelSize="small"
          fillWhite
          handleOnChange={(e) => setStatus(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default SearchHeaders;
