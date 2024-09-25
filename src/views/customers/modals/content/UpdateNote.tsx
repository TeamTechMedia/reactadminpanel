import TextFormField from "@/components/ui/inputfields/TextFormField";
import { useUpdateDealer } from "@/services/users/patch";
import useCustomToast from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ButtonSpinner from "@/components/ui/spinner/button";
import useFormSchema from "@/hooks/schema/dealers/notes/schema";

const defaultValues = {
  note: "",
};

interface Props {
  handleClose: () => void;
}

export const UpdateNotes = (props: Props) => {
  const { handleClose } = props;
  const router = useRouter();
  const schema = useFormSchema();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ note: string }>({
    defaultValues,
    resolver: yupResolver<any>(schema),
  });
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const update = useUpdateDealer();
  const onSubmit = ({ note }: { note: string }) => {
    update.mutate(
      {
        id: String(router.query.id),
        body: {
          internalNotes: [
            {
              note: note,
              time: new Date(),
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
              id="note"
              label="Note"
              placeholder="Enter your note"
              size="medium"
              error={errors.note}
              multiline
              rows={6}
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
