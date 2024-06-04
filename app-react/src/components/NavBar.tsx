import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <Box>
      <AppBar enableColorOnDark>
        <Toolbar>
          <Typography>Logo</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
