import { Card, CardContent } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";

export const InternalNotes = () => {
  function handleNotes() {
    console.log("noted");
  }
  return (
    <Card>
      <CardContent>
        <DealerCardContent
          heading="Internal Notes"
          subHeading="If you want to add any notes click the button here"
          btnText="Add Notes"
          handleBtnClick={handleNotes}
        />
      </CardContent>
    </Card>
  );
};
