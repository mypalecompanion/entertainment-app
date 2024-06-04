import { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* <h1>Hello World!</h1>
      <Button variant="outlined">Testowy Button</Button> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper
          sx={{
            p: 5,
            minHeight: 300,
          }}
        >
          <Typography variant="h4">Testujemy</Typography>
          <Button variant="contained">Test</Button>
          <Button variant="outlined">Drugi</Button>
        </Paper>
      </Box>
    </>
  );
}

export default App;
