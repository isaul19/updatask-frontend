/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "@core/layouts";
import { Error404Page } from "@errors/pages";
import { LazyPage } from "./components";

const ListProjectPage = React.lazy(() => import("@project/pages/ListProjectPage"));
const CreateProjectPage = React.lazy(() => import("@project/pages/CreateProjectPage"));
const UpdateProjectPage = React.lazy(() => import("@project/pages/UpdateProjectPage"));
const ShowProjectPage = React.lazy(() => import("@project/pages/ShowProjectPage"));

export const coreRouter = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/project" />,
      },
      {
        path: "/project",
        children: [
          {
            index: true,
            element: LazyPage(ListProjectPage),
          },
          {
            path: "create",
            element: LazyPage(CreateProjectPage),
          },
          {
            path: "show/:projectId",
            element: LazyPage(ShowProjectPage),
          },
          {
            path: "update/:projectId",
            element: LazyPage(UpdateProjectPage),
          },
        ],
      },
      {
        path: "/404",
        element: <Error404Page />,
      },
    ],
  },
]);
