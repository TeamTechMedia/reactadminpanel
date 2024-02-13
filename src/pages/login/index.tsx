import { useState, ReactNode } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import themeConfig from "@/configs/theme/themeConfig";
import BlankLayout from "@/layouts/components/BlankLayout";
import { Grid } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useLogin } from "@/services/auth/login/post";
import {
  LoginData,
  LoginMeta,
  LoginSuccessResponse,
} from "@/services/auth/types";
import useCustomToast from "@/utils/toast";
import { useAuthStore } from "@/store/auth/store";
import ErrorBox from "@/components/ui/utility/ErrorBox";
import ButtonSpinner from "@/components/ui/spinner/button";
import { useRouter } from "next/router";

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  fontFamily: "Roboto",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  }),
);

const schema = yup.object().shape({
  userId: yup.string().required(),
  password: yup.string().min(6).required(),
});

interface FormData {
  userId: string;
  password: string;
}

const defaultValues: FormData = {
  password: "",
  userId: "",
};

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const login = useLogin();
  const toast = useCustomToast();
  const { setAuth } = useAuthStore();
  const router = useRouter();

  function saveToken(meta: LoginMeta) {
    localStorage.setItem("accessToken", meta.access);
  }

  function saveUser(user: LoginData[]) {
    setAuth({
      user: user?.[0],
      loading: false,
    });
  }

  function handleLoginSuccess(res: LoginSuccessResponse) {
    toast.success("Login Success");
    saveToken(res.data.meta);
    saveUser(res.data.data);
    router.push("/home");
  }

  function handleLoginError() {
    toast.error("Login Failed");
  }

  const onSubmit = () => {
    // handleLoading();
    const authLogin = {
      role: "SUPERADMIN",
      userId: "53FI46",
      password: "abcd",
    };
    login.mutate(authLogin, {
      onSuccess: (res) => handleLoginSuccess(res),
      onError: () => handleLoginError(),
    });
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      minHeight={"100%"}
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
              {`Welcome to ${themeConfig.name}👋`}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Please sign-in to your accounts
            </Typography>
          </Grid>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid display={"flex"} flexDirection={"column"} gap={2}>
              <FormControl fullWidth>
                <Controller
                  name="userId"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label="User Id"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.userId)}
                      placeholder="Enter Your User Id"
                    />
                  )}
                />
                {errors.userId && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.userId.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="auth-login-v2-password"
                  error={Boolean(errors.password)}
                >
                  Password
                </InputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label="Password"
                      onChange={onChange}
                      id="auth-login-v2-password"
                      placeholder="Enter Your Password"
                      error={Boolean(errors.password)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <VisibilityOutlined />
                            ) : (
                              <VisibilityOffOutlined />
                            )}
                            {/* <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} /> */}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: "error.main" }} id="">
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  label="Stay signed in"
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
                <LinkStyled href="/forgot-password">
                  Forgot Password?
                </LinkStyled>
              </Box>
              {login.error && <ErrorBox error={login.error} />}
              <Button
                disabled={login.isPending}
                size="large"
                type="submit"
                variant="contained"
              >
                Login
                {login.isPending && <ButtonSpinner />}
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
LoginPage.guestGuard = true;
LoginPage.authGuard = false;

export default LoginPage;
