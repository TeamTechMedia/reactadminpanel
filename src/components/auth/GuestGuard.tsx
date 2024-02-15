// ** React Imports
import { ReactNode, ReactElement, useEffect } from "react";

// ** Next Import
import { useRouter } from "next/router";

interface GuestGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props;
  const router = useRouter();

  useEffect(() => {
    const hasAccess = window.localStorage.getItem("accessToken");
    if (!router.isReady) {
      return;
    }

    if (hasAccess) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return <>{children}</>;
};

export default GuestGuard;
