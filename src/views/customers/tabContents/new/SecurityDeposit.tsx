import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import { SecurityDepositPayment } from "./SecurityDepositPayment";
import { useContext, useState } from "react";
import { DealerContext } from "../CustomerTabs";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";

export const PaymentVerifyContent = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  return (
    <Grid p={2}>
      <Typography>
        Did you received the payment through any other means.
      </Typography>
      <Grid display={"flex"} justifyContent={"end"} gap={2} pt={2}>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained">Submit</Button>
      </Grid>
    </Grid>
  );
};

export const SecurityDeposit = () => {
  const [open, setOpen] = useState(false);
  function handleSecurity() {
    setOpen(!open);
  }
  const data = useContext(DealerContext);
  const { isDeposited } = data || {};
  return (
    <>
      <Card>
        <CardContent>
          <DealerCardContent
            heading="Security Deposit"
            subHeading="If the payments are not done by dealers,You
          can manually verify them from here"
            btnText="Verify Dealer"
            handleBtnClick={handleSecurity}
          />
        </CardContent>

        <SecurityDepositPayment isDeposited={Boolean(isDeposited)} />
      </Card>
      <ConfirmModal
        dailogueTitle="Are you sure to verify?"
        handleClose={handleSecurity}
        icon="tabler:info-circle"
        iconSize={"1.5rem"}
        titleFont={20}
        open={open}
        ContentComponent={<PaymentVerifyContent handleClose={handleSecurity} />}
      />{" "}
    </>
  );
};
