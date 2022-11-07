import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Services from "../../pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services?id=3"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services?id="),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
