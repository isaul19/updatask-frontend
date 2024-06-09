import { createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "@core/layouts";

import { DashboardPage } from "@dashboard/pages";
import { CreateProjectPage, ListProjectPage, EditProjectPage, ShowProjectPage } from "@project/pages";

export const coreRouter = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
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
            path: "edit",
            children: [
              {
                path: ":projectId",
                element: <EditProjectPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
