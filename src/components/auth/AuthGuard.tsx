// ** React Imports
import { ReactNode, ReactElement, useEffect } from "react";

// ** Next Import
import { useRouter } from "next/router";
import { AUTH_REDIRECTION_LINK } from "@/configs/auth/routes";

interface AuthGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children } = props;
  const router = useRouter();

  useEffect(
    () => {
      const hasAccess = window.localStorage.getItem("accessToken");

      if (!router.isReady) {
        return;
      }

      if (!hasAccess) {
        router.replace({
          pathname: AUTH_REDIRECTION_LINK,
          query: { returnUrl: router.asPath },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router],
  );

  return <>{children}</>;
};

export default AuthGuard;
