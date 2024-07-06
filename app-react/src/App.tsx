import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import createRouter from "./app/router";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={createRouter()} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
