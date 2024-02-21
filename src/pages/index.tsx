import { useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "@/components/ui/spinner/fallback";
import { HomeRouteTypes, RoleType } from "@/types/auth/role";

const homeRoutes: HomeRouteTypes = {
  SUPERADMIN: "/home",
};

const getHomeRoute = (role: RoleType) => {
  return homeRoutes[role] ?? "/";
};

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const hasAccess = window.localStorage.getItem("accessToken");
    const user = localStorage.getItem("userData");
    const parsedUser = user ? JSON.parse(user ?? "") : {};

    if (!router.isReady) {
      return;
    }
    if (hasAccess && parsedUser) {
      const homeRoute = getHomeRoute(parsedUser.role);
      router.replace(homeRoute);
    } else {
      const redirectionLink = "/";
      router.replace(redirectionLink);
    }
  }, []);

  return <Spinner />;
};

export default Home;
