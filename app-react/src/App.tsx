import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import NavBar from "./components/NavBar";
import ReactIcon from "./assets/react.svg";

function App() {
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper
          sx={{
            p: 5,
            alignContent: "center",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <img src={ReactIcon} height={200} />
          <Typography variant="h4" sx={{ mb: 2 }}>
            Testujemy
          </Typography>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Button variant="contained">Pierwszy</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Drugi</Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default App;
