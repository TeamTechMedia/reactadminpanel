import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import { SecurityDepositPayment } from "./SecurityDepositPayment";
import { useContext, useState } from "react";
import { DealerContext } from "../CustomerTabs";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";
import { SpanBold } from "@/components/ui/utility/BoldSpan";
import TextFormField from "@/components/ui/inputfields/TextFormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormSchema from "@/hooks/schema/dealers/deposit/schema";
import { DealerDeposit } from "@/types/customers/types";
import { useUpdateDealer } from "@/services/users/patch";
import { useRouter } from "next/router";
import useCustomToast from "@/utils/toast";
import { useQueryClient } from "@tanstack/react-query";

const defaultValues = {
  amount: 0,
};

export const PaymentVerifyContent = ({
  handleClose,
  dealership,
}: {
  handleClose: () => void;
  dealership: string;
}) => {
  const router = useRouter();
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const [showPaymentData, setShowPaymentData] = useState(false);
  const schema = useFormSchema();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const update = useUpdateDealer();

  const onSubmit = (val: DealerDeposit) => {
    update.mutate(
      {
        id: String(router.query.id),
        body: {
          isDeposited: true,
          depositedAmount: val.amount,
        },
      },
      {
        onSuccess: () => handleSuccess(),
      },
    );
  };

  function handleSuccess() {
    toast.success("Dealer Updated Successfully");
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
    handleClose();
  }

  return showPaymentData ? (
    <Grid p={3} display={"flex"} flexDirection={"column"} gap={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid display={"flex"} flexDirection={"column"} gap={3}>
          <Typography>
            Enter the amount that <SpanBold text={dealership} /> payed as
            security deposit through other means
          </Typography>
          <TextFormField
            control={control}
            id="amount"
            type="number"
            label="Amount Paid in Rupees"
            size="medium"
            error={errors.amount}
          />
          <Grid display={"flex"} justifyContent={"end"}>
            <Button
              disabled={update.isPending}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  ) : (
    <Grid p={3}>
      <Typography>
        Did <SpanBold text={dealership} /> payed the security deposit through
        any other means?
      </Typography>
      <Grid display={"flex"} justifyContent={"end"} gap={2} pt={2}>
        <Button onClick={handleClose} variant="outlined">
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => setShowPaymentData(!showPaymentData)}
        >
          Yes
        </Button>
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
  const { isDeposited, businessName = "Dealer", depositedAmount } = data || {};
  console.log(depositedAmount, "dataCheck");
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

        <SecurityDepositPayment
          isDeposited={Boolean(isDeposited)}
          amount={depositedAmount ?? 0}
        />
      </Card>
      <ConfirmModal
        dailogueTitle="Dealer Verification"
        handleClose={handleSecurity}
        icon="tabler:user-check"
        iconSize={"1.5rem"}
        titleFont={20}
        open={open}
        ContentComponent={
          <PaymentVerifyContent
            handleClose={handleSecurity}
            dealership={businessName}
          />
        }
      />{" "}
    </>
  );
};
