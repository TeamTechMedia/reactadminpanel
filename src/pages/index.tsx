import { useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "@/components/ui/spinner/fallback";

// export const getHomeRoute = (role: RoleType) => {
//   if (role === "SUPERADMIN") return "/home";
//   else return "/login";
// };

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const hasAccess = window.localStorage.getItem("accessToken");

    if (!router.isReady) {
      return;
    }

    if (hasAccess) {
      const homeRoute = "/home";
      // Redirect user to Home URL
      router.replace(homeRoute);
    } else {
      const redirectionLink = "/";
      router.replace(redirectionLink);
    }
  }, []);

  return <Spinner />;
};

export default Home;
