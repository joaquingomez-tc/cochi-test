import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Nav/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);
