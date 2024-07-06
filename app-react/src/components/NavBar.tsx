import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar enableColorOnDark>
        <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
          <Box display="flex" alignItems="center">
            <Typography>Logo [To be]</Typography>
            <Button
              color="inherit"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                setAnchorEl(event.currentTarget)
              }
            >
              Authorization Test
            </Button>
            <Menu open={open} anchorEl={anchorEl} onClose={handleMenuClose}>
              <MenuItem onClick={() => navigate("/auth-test/basic")}>Basic Authorization</MenuItem>
              <MenuItem>Token Bearer Authorization</MenuItem>
            </Menu>
          </Box>
          <Button
            color="inherit"
            variant="contained"
            sx={{ color: "white" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
