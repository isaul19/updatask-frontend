import { createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "@core/layouts";
import { HomePage } from "@home/Page.home";
import { ProjectPage } from "@project/Page.project";

export const coreRouter = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/project",
        children: [
          {
            index: true,
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
]);
