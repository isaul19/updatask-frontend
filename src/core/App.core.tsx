import { RouterProvider } from "react-router-dom";
import { coreRouter } from "@core/Router.core";

export const Application = () => {
  return (
    <>
      <RouterProvider router={coreRouter} />
    </>
  );
};
