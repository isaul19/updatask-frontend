import { Navigate, createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "@core/layouts";

import { CreateProjectPage, ListProjectPage, UpdateProjectPage, ShowProjectPage } from "@project/pages";
import { Error404Page } from "@errors/pages";

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
            element: <ListProjectPage />,
          },
          {
            path: "create",
            element: <CreateProjectPage />,
          },
          {
            path: "show",
            children: [
              {
                path: ":projectId",
                element: <ShowProjectPage />,
              },
            ],
          },
          {
            path: "update",
            children: [
              {
                path: ":projectId",
                element: <UpdateProjectPage />,
              },
            ],
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
