import { Card } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";

export const ContactInfo = () => {
  function handleContactInfo() {
    console.log("submitted");
  }
  return (
    <Card>
      <DealerCardContent
        heading="Contact Info"
        subHeading="If you want to add additional contact details
for this dealer click the button here"
        btnText="Add Contact"
        handleBtnClick={handleContactInfo}
      />
    </Card>
  );
};
