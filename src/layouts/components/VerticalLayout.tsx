import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { LayoutProps } from "../types";
import AppBar from "../components/app-bar/index";
import themeConfig from "@/configs/theme/themeConfig";
import Navigation from "@/components/ui/navigation";

const VerticalLayoutWrapper = styled("div")({
  height: "100%",
  display: "flex",
  overflowX: "auto",
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  paddingTop: 5,
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const VerticalLayout = (props: LayoutProps) => {
  // ** Props
  const { children, contentHeightFixed, verticalLayoutProps, hidden } = props;
  // ** Vars
  const navigationBorderWidth = 0;
  const { navigationSize } = themeConfig;
  const navWidth = navigationSize;

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(hidden ? false : true);

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible);
  const collapsedNavWidth = 100;

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          collapsedNavWidth={collapsedNavWidth}
          toggleNavVisibility={toggleNavVisibility}
          navigationBorderWidth={navigationBorderWidth}
          navMenuContent={verticalLayoutProps.navMenu.content}
          navMenuBranding={verticalLayoutProps.navMenu.branding}
          menuLockedIcon={null}
          verticalNavItems={verticalLayoutProps.navMenu.navItems}
          navMenuProps={verticalLayoutProps.navMenu.componentProps}
          menuUnlockedIcon={null}
          afterNavMenuContent={verticalLayoutProps.navMenu.afterContent}
          beforeNavMenuContent={verticalLayoutProps.navMenu.beforeContent}
          {...props}
        />
        <MainContentWrapper
          className="layout-content-wrapper"
          sx={{ ...(contentHeightFixed && { maxHeight: "100vh" }) }}
        >
          <AppBar
            toggleNavVisibility={toggleNavVisibility}
            appBarContent={verticalLayoutProps.appBar?.content}
            appBarProps={verticalLayoutProps.appBar?.componentProps}
            {...props}
          />

          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentHeightFixed && {
                overflow: "hidden",
                "& > :first-of-type": { height: "100%" },
              }),
              mx: "auto",
              "@media (min-width:1440px)": { maxWidth: 1440 },
              "@media (min-width:1200px)": { maxWidth: "100%" },
            }}
          >
            {children}
          </ContentWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
    </>
  );
};

export default VerticalLayout;
