import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ServicesLayout from "../layouts/ServicesLayout";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <ServicesLayout></ServicesLayout>,
        children: [
          {
            index: true,
            element: <Services></Services>,
          },
        ],
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path:"/auth/forgot-password",
        element:<ForgotPassword></ForgotPassword>
      },
    ],
  },
  {
    path: "/terms",
    element: <Terms></Terms>,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy></PrivacyPolicy>,
  },

  {
    path: "/*",
    element: <h1>Error404</h1>,
  },
]);

export default router;