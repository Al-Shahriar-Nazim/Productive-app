import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import App from "../Pages/App/App";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("tData.json"),
        Component: Home,
      },
      {
        path: "/app",
        Component: App,
        loader: () => fetch("aData.json"),
      },
      {
        path: "/installation",
        Component: Installation,
         loader: () => fetch("aData.json"),
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
        loader: () => fetch("aData.json"),
      },
      {
        path:"*",
        Component:ErrorPage
      }
    ],
  },
]);
