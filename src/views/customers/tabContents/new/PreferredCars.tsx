import { Card, CardContent, Chip, Divider } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import { UpdateDealerModal } from "../../modals/UpdateDealerModal";
import { useContext, useState } from "react";
import { DealerContext } from "../CustomerTabs";

export const PreferredCars = () => {
  const [open, setOpen] = useState(false);
  const data = useContext(DealerContext);
  const { carNotes } = data || {};

  function handleModels() {
    setOpen(!open);
  }
  return (
    <>
      <Card>
        <CardContent>
          <DealerCardContent
            heading="Preferred Car Models"
            subHeading="Here you can add a specific dealers preferred car models"
            btnText="Add Models"
            handleBtnClick={handleModels}
          />
          {carNotes && carNotes?.length > 0 && <Divider sx={{ my: 3 }} />}
          {carNotes &&
            carNotes?.length > 0 &&
            carNotes?.map(
              (note: { model: string | undefined }, index: number) => (
                <Chip
                  label={note?.model}
                  color="primary"
                  key={index}
                  sx={{ mr: 1 }}
                />
              ),
            )}
        </CardContent>
      </Card>
      <UpdateDealerModal
        handleClose={handleModels}
        open={open}
        type="car_models"
      />
    </>
  );
};
