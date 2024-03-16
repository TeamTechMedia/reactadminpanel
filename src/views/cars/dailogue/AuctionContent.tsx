import TextFormField from "@/components/ui/inputfields/TextFormField";
import TimePickerForm from "@/components/ui/inputfields/TimePickerForm";
import { ApproveCar } from "@/types/cars/approve";
import { Button, DialogActions, Grid } from "@mui/material";
import { Control } from "react-hook-form";

interface AuctionControlProps {
  control: Control<ApproveCar>;
  errors: any;
  handleCancel: () => void;
}

export function AuctionContent(auctionContentProps: AuctionControlProps) {
  const { control, errors, handleCancel } = auctionContentProps;

  return (
    <Grid padding={3} container display={"flex"} gap={2} width={"100%"}>
      <Grid width={"100%"}>
        <TimePickerForm
          id="startBidTime"
          control={control}
          error={errors?.startBidTime}
          label="Start Bid Time"
        />
      </Grid>
      <Grid width={"100%"}>
        <TimePickerForm
          id="endBidTime"
          control={control}
          error={errors?.endBidTime}
          label="End Bid Time"
        />
      </Grid>
      <Grid width={"100%"}>
        <TextFormField
          control={control}
          id="realValue"
          error={errors?.realValue}
          label="Fair Market Price"
          size="medium"
          type="number"
          InputProps={{
            startAdornment: <Grid mr={1}>₹</Grid>,
          }}
        />
      </Grid>
      <Grid width={"100%"}>
        <DialogActions className="dialog-actions-dense">
          <Button type="submit" variant="contained">
            Proceed
          </Button>
          <Button onClick={handleCancel} variant="contained" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Grid>
    </Grid>
  );
}
