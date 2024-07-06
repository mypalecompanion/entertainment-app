import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from ".";
import BasicAuthRoute from "./auth-test/basic";
import BearerAuthRoute from "./auth-test/bearer";
import LoginRoute from "./login";

const createRouter = () =>
  createBrowserRouter([
    { path: "/", element: <HomeRoute /> },
    { path: "/login", element: <LoginRoute /> },
    {
      path: "/auth-test",
      children: [
        {
          path: "/auth-test/basic",
          element: <BasicAuthRoute />,
        },
        {
          path: "/auth-test/bearer",
          element: <BearerAuthRoute />,
        },
      ],
    },
  ]);

export default createRouter;
