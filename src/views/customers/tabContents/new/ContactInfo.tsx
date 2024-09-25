import { Card, CardContent, Divider } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import { UpdateDealerModal } from "../../modals/UpdateDealerModal";
import { useContext, useState } from "react";
import { DealerContext } from "../CustomerTabs";
import { PlainTable } from "@/components/ui/table/PlainTable";
import { Dealer } from "@/types/customers/get";

export const ContactInfo = () => {
  const [open, setOpen] = useState(false);
  const data = useContext(DealerContext) || ({} as Dealer);
  function handleContactInfo() {
    console.log(data, "submitted");
    setOpen(!open);
  }
  const contactInfo =
    (data &&
      data?.extraContactNo?.map((item) => ({
        label: item.name,
        value: item.phoneNumber,
      }))) ??
    [];

  return (
    <>
      <Card>
        <CardContent>
          <DealerCardContent
            heading="Contact Info"
            subHeading="If you want to add additional contact details
            for this dealer click the button here"
            btnText="Add Contact"
            handleBtnClick={handleContactInfo}
          />
          {contactInfo.length ? (
            <>
              <Divider sx={{ my: 3 }} />
              <PlainTable data={contactInfo} />
            </>
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
      <UpdateDealerModal
        open={open}
        type="contact_info"
        handleClose={handleContactInfo}
      />
    </>
  );
};
