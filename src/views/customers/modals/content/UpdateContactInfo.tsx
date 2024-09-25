import TextFormField from "@/components/ui/inputfields/TextFormField";
import { useUpdateDealer } from "@/services/users/patch";
import { ContactDealerDetails } from "@/types/customers/types";
import useCustomToast from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ButtonSpinner from "@/components/ui/spinner/button";
import useFormSchema from "@/hooks/schema/dealers/contact-info/schema";

const defaultValues = {
  name: "",
  phoneNumber: null,
};

interface Props {
  handleClose: () => void;
}

export const UpdateContactInfo = (props: Props) => {
  const { handleClose } = props;
  const router = useRouter();
  const schema = useFormSchema();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDealerDetails>({
    defaultValues,
    resolver: yupResolver<any>(schema),
  });
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const update = useUpdateDealer();
  const onSubmit = (val: ContactDealerDetails) => {
    update.mutate(
      {
        id: String(router.query.id),
        body: {
          extraContactNo: [
            {
              phoneNumber: Number(val.phoneNumber),
              name: val.name,
            },
          ],
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

  return (
    <Grid p={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={3}>
          <Grid item xs={12}>
            <TextFormField
              control={control}
              id="name"
              label="Contact Name"
              placeholder="Enter your name"
              size="medium"
              error={errors.name}
            />
          </Grid>

          <Grid item xs={12}>
            <TextFormField
              control={control}
              id="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone"
              size="medium"
              type="number"
              error={errors.phoneNumber}
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
