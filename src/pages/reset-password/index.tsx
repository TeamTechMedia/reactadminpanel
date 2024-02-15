import PasswordField from "@/components/ui/inputfields/PasswordFormField";
import BlankLayout from "@/layouts/components/BlankLayout";
import useCustomToast from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const defaultValues = {
  password: "",
  confirm_password: "",
};

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password field is required"),
  confirm_password: yup
    .string()
    .required("Confirm Password field is required")
    .test("confirm", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

function ResetPassword() {
  const toast = useCustomToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    console.log("submitted");
    toast.success("Password Reseted Successfully");
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      minHeight={"100vh"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minWidth={"100%"}
        padding={[6, 12]}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          justifyContent={"space-between"}
          maxWidth={400}
          width={"100%"}
        >
          <Grid display={"flex"} flexDirection={"column"}>
            <Typography
              display={"flex"}
              justifyContent={"start"}
              sx={{
                mb: 1.5,
                fontWeight: 500,
                fontSize: "1.625rem",
                lineHeight: 1.385,
              }}
            >
              Reset Password
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Please sign-in to your account
            </Typography>
          </Grid>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid display={"flex"} flexDirection={"column"} gap={2}>
              <PasswordField
                control={control}
                errors={errors.password}
                id="password"
                label="Password"
              />
              <PasswordField
                control={control}
                errors={errors.confirm_password}
                id="confirm_password"
                label="Confirm Password"
              />

              <Button size="large" type="submit" variant="contained">
                Reset Password
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

ResetPassword.getLayout = (page: ReactNode) => (
  <BlankLayout>{page}</BlankLayout>
);
ResetPassword.guestGuard = true;
ResetPassword.authGuard = false;

export default ResetPassword;
