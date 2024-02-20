// ** React Imports
import { useState, SyntheticEvent, Fragment } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** MUI Imports
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";

// ** Icon Imports
import Icon from "../../icon/index";
import { useAuthStore } from "@/store/auth/store";
import { defaultLogin } from "@/default/auth/login";

// ** Styled Components
const BadgeContentSpan = styled("span")(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  "&:hover .MuiBox-root, &:hover .MuiBox-root svg": {
    color: theme.palette.primary.main,
    paddingTop: 2,
  },
}));

const UserDropdown = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  // ** Store
  const { auth, setAuth } = useAuthStore();

  // ** Hooks
  const router = useRouter();

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleDropdownClose();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    router.push("/login");
    setAuth({
      loading: false,
      user: defaultLogin.user,
    });
  };

  const userName = auth.user.fullname?.toUpperCase() ?? "User";

  return (
    <Fragment>
      <Badge
        overlap="circular"
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: "pointer" }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar
          alt={userName}
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src={"/user"}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ "& .MuiMenu-paper": { width: 230 } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Badge
              overlap="circular"
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar
                alt={userName}
                src={"/user"}
                sx={{ width: "2.5rem", height: "2.5rem" }}
              />
            </Badge>
            <Box
              sx={{
                display: "flex",
                ml: 2.5,
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2">{auth.user.fullname}</Typography>
              <Typography variant="body2">{auth.user.email}</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ py: 0 }} />

        <MenuItemStyled
          onClick={handleLogout}
          sx={{ "& svg": { mr: 2, fontSize: "1.375rem" } }}
        >
          <Icon icon="tabler:logout" />
          Logout
        </MenuItemStyled>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
