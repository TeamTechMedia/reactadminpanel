import { Card, CardContent } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";

export const AccountInfo = () => {
  function handleBtn() {
    console.log("");
  }
  return (
    <Card>
      <CardContent>
        <DealerCardContent
          heading="Account status"
          subHeading="The account is currently active"
          btnText="Suspend"
          handleBtnClick={handleBtn}
        />
      </CardContent>
    </Card>
  );
};
