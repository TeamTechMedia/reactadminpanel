import { ReactNode } from "react";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { Box } from "@mui/material";
import Layout from "./Layout";
import VerticalAppBarContent from "./app-bar/content/AppBarContent";
import VerticalNavItems from "../navigation/index";

interface Props {
  children: ReactNode;
  contentHeightFixed?: boolean;
}

const AppBrand = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Image loading="lazy" src="/" alt="logo" width="45" height="34" />
    </Box>
  );
};

const UserLayout = ({ children, contentHeightFixed }: Props) => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <Layout
      hidden={hidden}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          branding: () => AppBrand(),
          navItems: VerticalNavItems(),
        },
        appBar: {
          content: (props) => (
            <VerticalAppBarContent
              hidden={hidden}
              toggleNavVisibility={props.toggleNavVisibility}
            />
          ),
        },
      }}
    >
      {children}
    </Layout>
  );
};

export default UserLayout;
