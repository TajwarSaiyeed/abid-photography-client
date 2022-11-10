import { createBrowserRouter } from "react-router-dom";
import ServiceDetailsReview from "../../components/ServiceDetailsReview/ServiceDetailsReview";
import Main from "../../layout/Main/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Contactme from "../../pages/Home/Contactme";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Myprofile from "../../pages/Myprofile/Myprofile";
import MyReview from "../../pages/MyReview/MyReview";
import NotFound from "../../pages/NotFound/NotFound";
import Services from "../../pages/Services/Services";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://service-review-server-abid.vercel.app/services?id=3"),
      },
      {
        path: "/services",
        element: <Services />,
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contactme",
        element: <Contactme />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Myprofile />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: <ServiceDetailsReview />,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-abid.vercel.app/service/${params.id}`
          ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
