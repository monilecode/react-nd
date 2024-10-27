import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "../pages/about-page";
import { ServicesPage } from "../pages/services-page";
import { HomePage } from "../pages/home-page";
import { Topbar } from "../components/layout/Topbar";
import { BaseLayout } from "../components/layout/BaseLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/services", Component: ServicesPage },
      { path: "/about", Component: AboutPage },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={Router} />;
};
