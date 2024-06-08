import { createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "@core/layouts";

import { DashboardPage } from "@dashboard/pages";
import { CreateProjectPage, ListProjectPage } from "@project/pages";

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
        ],
      },
    ],
  },
]);
