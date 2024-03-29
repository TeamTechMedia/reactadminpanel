import { useState } from "react";
import { useRouter } from "next/router";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";

import { NavLink, NavGroup } from "../types";
import { handleURLQueries } from "../utils";
import Tooltip from "@mui/material/Tooltip";
import CanViewNavLink from "@/components/acl/CanViewNavLink";
import IconifyIcon from "@/components/ui/icon";
import { ListItemIcon } from "@mui/material";

interface Props {
  parent?: boolean;
  item: NavLink;
  navHover?: boolean;
  navVisible?: boolean;
  collapsedNavWidth: number;
  navigationBorderWidth: number;
  toggleNavVisibility: () => void;
  isSubToSub?: NavGroup | undefined;
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<ListItemButtonProps>(() => ({
  width: "100%",
  transition: "padding-left .25s ease-in-out, padding-right .25s ease-in-out",
  height: "49px",
  "&.active": {
    "&, &:hover": {
      background: "#E6F7FF",
    },
    "& .MuiTypography-root, & svg": {
      color: "#000000D9",
    },
  },
  "&.Mui-disabled": {
    opacity: 1,
  },
  "& .MuiTypography-root, & svg": {
    color: "#3C79F5",
  },
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  justifyContent: "start",
  transition: "opacity .25s ease-in-out",
  color: "#3C79F5",
  overflow: "hidden",
}));

const ActiveStrip = styled(Box)<BoxProps>(() => ({
  backgroundColor: "#1890FF",
  width: "3.5px",
  height: "49px",
}));

const VerticalNavLink = ({
  item,
  navHover,
  navVisible,
  toggleNavVisibility,
}: Props) => {
  const router = useRouter();
  const navCollapsed = true;
  const [toolTipOpen, setToolTipOpen] = useState(false);

  const handleToolTipClose = () => {
    setToolTipOpen(false);
  };

  const handleToolTipOpen = () => {
    if (navCollapsed && !navHover) setToolTipOpen(true);
    else setToolTipOpen(false);
  };
  const conditionalColors = () => {
    return {
      "& .MuiTypography-root, & svg": {
        color: "#000000D9",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "22px",
      },
    };
  };

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true;
    } else {
      return false;
    }
  };

  const changeRoute = (path: string | undefined) => {
    if (path) router.replace(path);
  };

  return (
    <>
      <CanViewNavLink navLink={item}>
        <Tooltip
          title={item.title}
          placement="right"
          open={toolTipOpen}
          onClose={handleToolTipClose}
          onOpen={handleToolTipOpen}
          arrow
        >
          <ListItem
            disablePadding
            disabled={item.disabled || false}
            sx={{ px: "0 !important" }}
          >
            <MenuNavLink
              {...(item.disabled && { tabIndex: -1 })}
              className={isNavLinkActive() ? "active" : ""}
              {...(item.openInNewTab ? { target: "_blank" } : null)}
              onClick={(e) => {
                if (item.path === undefined) {
                  e.preventDefault();
                  e.stopPropagation();

                  return null;
                }
                if (navVisible) {
                  toggleNavVisibility();
                }
                changeRoute(item.path);
              }}
              sx={{
                ...conditionalColors(),
                ...(item.disabled
                  ? { pointerEvents: "none" }
                  : { cursor: "pointer" }),
                display: "flex",
                gap: 1,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  transition: "margin .25s ease-in-out",
                  // ...(navCollapsed && !navHover ? { mr: 0 } : { mr: 2 }),
                  "& svg": {
                    fontSize: "1.4rem !important",
                  },
                }}
              >
                <IconifyIcon icon={item.icon as string | any} fontSize={26} />
              </ListItemIcon>
              <MenuItemTextMetaWrapper>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography
                    noWrap
                    fontWeight={400}
                    lineHeight={22}
                    fontSize={16}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </MenuItemTextMetaWrapper>
            </MenuNavLink>
            {isNavLinkActive() && <ActiveStrip></ActiveStrip>}
          </ListItem>
        </Tooltip>
      </CanViewNavLink>
    </>
  );
};

export default VerticalNavLink;
