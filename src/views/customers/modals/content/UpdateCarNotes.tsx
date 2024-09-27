import TextFormField from "@/components/ui/inputfields/TextFormField";
import { useUpdateDealer } from "@/services/users/patch";
import useCustomToast from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, IconButton } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useFieldArray, useForm } from "react-hook-form";
import ButtonSpinner from "@/components/ui/spinner/button";
import IconifyIcon from "@/components/ui/icon";
import useFormSchema from "@/hooks/schema/dealers/car-notes/schema";

const defaultValues = {
  carNotes: [
    {
      model: "",
    },
  ],
};

interface Props {
  handleClose: () => void;
}

export const UpdateCarNotes = (props: Props) => {
  const { handleClose } = props;
  const router = useRouter();
  const schema = useFormSchema();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "carNotes",
    control,
  });

  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const update = useUpdateDealer();
  const onSubmit = ({ carNotes }: { carNotes?: { model: string }[] }) => {
    update.mutate(
      {
        id: String(router.query.id),
        body: {
          carNotes,
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
          {fields.map((field, index) => {
            return (
              <Grid
                key={field.id}
                item
                xs={12}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <TextFormField
                  control={control}
                  id={`carNotes.[${index}].model`}
                  label={`Model ${index + 1}`}
                  placeholder="Enter model"
                  size="medium"
                  error={errors?.carNotes?.[index]?.model}
                />
                {fields.length !== 1 && (
                  <Grid>
                    <IconButton onClick={() => remove(index)}>
                      <IconifyIcon icon={"tabler:x"} color="red" />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            );
          })}
          <Grid>
            <Button onClick={() => append({ model: "" })} variant="outlined">
              Add Model
            </Button>
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
