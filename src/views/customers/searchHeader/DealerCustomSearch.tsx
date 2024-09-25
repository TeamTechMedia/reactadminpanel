import SelectFormField from "@/components/ui/inputfields/SelectField";
import TextFormField from "@/components/ui/inputfields/TextFormField";
import { renderMenuItems } from "@/components/ui/utility/MenuItem";
import { getDealerSearch } from "@/functions/dealers/get-dealer-search-components";
import { Grid } from "@mui/material";
import { Control, UseFormSetValue } from "react-hook-form";

interface Props {
  control: Control<any>;
  searchBy: string | null;
  setValue: UseFormSetValue<any>;
}

const searchOptions = [
  { label: "Search By", value: null },
  { label: "User ID", value: "userId" },
  { label: "Name", value: "businessName" },
  { label: "Contact No.", value: "contactNo" },
  { label: "Location", value: "district" },
  { label: "Security Deposit", value: "isDeposited" },
  { label: "Document Status", value: "isDocumentsVerified" },
];

export const DealerCustomSearch = (props: Props) => {
  const { control, searchBy, setValue } = props;
  const searchFilter = getDealerSearch(searchBy);
  const hideInput = searchFilter?.type === "hide";

  return (
    <Grid display={"flex"} item xs={hideInput ? 3 : 6} gap={3}>
      <SelectFormField
        control={control}
        id="searchBy"
        renderMenuItems={renderMenuItems}
        data={searchOptions}
        label="Search By"
        fillWhite
        size="medium"
        handleOnChange={() => setValue("search", "")}
      />
      {searchFilter?.type === "drop_down" ? (
        <SelectFormField
          control={control}
          id="search"
          renderMenuItems={renderMenuItems}
          data={searchFilter.data}
          size="medium"
          label={searchFilter.label ?? ""}
        />
      ) : hideInput ? (
        ""
      ) : (
        <TextFormField
          control={control}
          id="search"
          placeholder={`Search by ${searchFilter?.label ?? ""}`}
          label={`Search by ${searchFilter?.label ?? ""}`}
          size="medium"
        />
      )}
    </Grid>
  );
};
