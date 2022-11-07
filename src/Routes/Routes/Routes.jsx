import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services"),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
