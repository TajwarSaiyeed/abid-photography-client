import { createBrowserRouter } from "react-router-dom";
import ServiceDetailsReview from "../../components/ServiceDetailsReview/ServiceDetailsReview";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import NotFound from "../../pages/NotFound/NotFound";
import Services from "../../pages/Services/Services";
import Signup from "../../pages/Signup/Signup";

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
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myreview",
        element: <MyReview />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetailsReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
