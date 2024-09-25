import TextFormField from "@/components/ui/inputfields/TextFormField";
import useFormSchema from "@/hooks/schema/dealers/basic/schema";
import { useUpdateDealer } from "@/services/users/patch";
import { BasicDealersDetails } from "@/types/customers/types";
import useCustomToast from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DealerContext } from "../../tabContents/CustomerTabs";
import ButtonSpinner from "@/components/ui/spinner/button";

const defaultValues = {
  fullname: "",
  businessName: "",
  bussinessAddress: "",
  pincode: "",
};

interface Props {
  handleClose: () => void;
}

export const UpdateCustomerBasic = (props: Props) => {
  const { handleClose } = props;
  const router = useRouter();
  const schema = useFormSchema();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BasicDealersDetails>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const update = useUpdateDealer();
  const onSubmit = (val: BasicDealersDetails) => {
    update.mutate(
      {
        id: String(router.query.id),
        body: { ...val },
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
  const data = useContext(DealerContext);

  useEffect(() => {
    if (data) {
      reset({
        businessAddress: data?.businessAddress,
        businessName: data?.businessName,
        fullname: data?.fullname,
        pincode: data?.pincode,
      });
    }
  }, [data, reset]);

  return (
    <Grid p={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={6}>
          <Grid item xs={5.5}>
            <TextFormField
              control={control}
              id="fullname"
              label="Customer Name"
              placeholder="Enter your name"
              size="medium"
              error={errors.fullname}
            />
          </Grid>
          <Grid item xs={5.5}>
            <TextFormField
              control={control}
              id="businessName"
              label="Business Name"
              placeholder="Enter your business name"
              size="medium"
              error={errors.businessName}
            />
          </Grid>
          <Grid item xs={5.5}>
            <TextFormField
              control={control}
              id="businessAddress"
              label="Business Address"
              placeholder="Enter your Business Address"
              size="medium"
              multiline
              rows={6}
              error={errors.businessAddress}
            />
          </Grid>
          <Grid item xs={5.5}>
            <TextFormField
              control={control}
              id="pincode"
              label="Pincode"
              placeholder="Enter your pincode"
              size="medium"
              type="number"
              error={errors.pincode}
            />
          </Grid>
        </Grid>
        <Grid display={"flex"} justifyContent={"end"} mt={3} gap={2}>
          <Button
            disabled={update.isPending}
            onClick={handleClose}
            variant="outlined"
            type="reset"
          >
            Cancel
          </Button>
          <Button disabled={update.isPending} variant="contained" type="submit">
            {update.isPending ? <ButtonSpinner /> : "Submit"}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
