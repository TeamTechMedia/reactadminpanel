import FontWrapper from "@/components/ui/wrappers/FontWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/configs/theme/mui";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import AuthGuard from "@/components/auth/AuthGuard";
import Spinner from "../components/ui/spinner/fallback";
import UserLayout from "@/layouts/components/UserLayout";
import GuestGuard from "@/components/auth/GuestGuard";

interface ExtraNextPageParams {
  authGuard: boolean;
  guestGuard: boolean;
  getLayout: (component: React.JSX.Element) => ReactNode;
  contentHeightFixed: boolean;
}

type ExtendedAppProps = AppProps & {
  Component: NextPage & ExtraNextPageParams;
};

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

const queryClient = new QueryClient();

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

export default function App({ Component, pageProps }: ExtendedAppProps) {
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;

  const contentHeightFixed = Component.contentHeightFixed ?? false;
  const getLayout =
    Component.getLayout ??
    ((
      page:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | PromiseLikeOfReactNode
        | null
        | undefined,
    ) => (
      <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>
    ));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FontWrapper>
          <Guard authGuard={authGuard} guestGuard={guestGuard}>
            {getLayout(<Component {...pageProps} />)}
          </Guard>
          <Toaster />
        </FontWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
