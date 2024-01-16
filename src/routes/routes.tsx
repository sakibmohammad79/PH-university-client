import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import adminPath from "./admin.routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminPath,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
