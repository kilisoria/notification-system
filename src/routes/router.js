import React from "react";

import HomePage from "../pages/home";
import AboutPage from "../pages/about";

import NotificationsPage from "../pages/notifications";
import NotificationPage from "../pages/notifications/notification";

import ErrorPage from "../pages/error/";

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
]);

export default router;
