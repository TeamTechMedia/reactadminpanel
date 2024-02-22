import React from "react";
import styled from "@emotion/styled";
import IconifyIcon from "@/components/ui/icon";
import { Box, BoxProps, IconButton, Typography } from "@mui/material";

interface DrawerHeaderProps {
  heading: string;
  handleClose?: () => void;
}

export const Header = styled(Box)<BoxProps>(({ theme }: { theme: any }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3),
  justifyContent: "space-between",
}));

export const DrawerHeader = (props: DrawerHeaderProps) => {
  const { heading, handleClose } = props;
  return (
    <Header>
      <Typography variant="h6">{heading}</Typography>
      {handleClose && (
        <IconButton
          size="small"
          onClick={handleClose}
          sx={{
            borderRadius: 1,
            color: "text.primary",
            backgroundColor: "action.selected",
          }}
        >
          <IconifyIcon icon="tabler:x" fontSize="1.125rem" />
        </IconButton>
      )}
    </Header>
  );
};
