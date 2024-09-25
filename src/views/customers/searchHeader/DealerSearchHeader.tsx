import { Grid } from "@mui/material";
import { DealerCustomSearch } from "./DealerCustomSearch";
import { DealerContext, DealerContextType } from "@/pages/dealers";
import { useContext } from "react";

export const DealerSearchHeader = () => {
  const propParams = useContext<DealerContextType>(DealerContext);
  const { watch, control, setValue } = propParams as any;
  const [searchBy] = watch(["searchBy"]);
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      paddingY={4}
    >
      <DealerCustomSearch
        control={control}
        searchBy={searchBy}
        setValue={setValue}
      />
    </Grid>
  );
};
