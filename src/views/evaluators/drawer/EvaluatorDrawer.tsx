import DrawerActions from "@/components/ui/drawers/DrawerActions";
import { DrawerHeader } from "@/components/ui/drawers/DrawerHeader";
import { Drawer, Grid } from "@mui/material";
import EvaluatorForm from "../forms/EvaluatorForm";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { EvaluatorAddFormType } from "@/types/evaluators/formTypes";

type EvaluatorDrawerProps = {
  open: boolean;
  handleClick: () => void;
  control: Control<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (val: EvaluatorAddFormType) => void;
  errors: FieldErrors<EvaluatorAddFormType>;
};

const EvaluatorDrawer = (props: EvaluatorDrawerProps) => {
  const { open, handleClick, control, handleSubmit, onSubmit, errors } = props;

  return (
    <Drawer
      open={open}
      onClose={handleClick}
      anchor="right"
      variant="temporary"
      sx={{ "& .MuiDrawer-paper": { width: { xs: 360, sm: 400 } } }}
    >
      <DrawerHeader heading="Add Evaluator" handleClose={handleClick} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container padding={2} display={"flex"} gap={2}>
          <EvaluatorForm control={control} errors={errors} />
          <DrawerActions handleCancel={handleClick} />
        </Grid>
      </form>
    </Drawer>
  );
};

export default EvaluatorDrawer;
