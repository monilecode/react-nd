import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BaseLayout } from "../components/layout/BaseLayout";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { AboutPage } from "../pages/AboutPage";
import { LoginPage } from "../pages/LoginPage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/services", Component: ServicesPage },
      { path: "/about", Component: AboutPage },
      { path: "/login", Component: LoginPage },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={Router} />;
};
