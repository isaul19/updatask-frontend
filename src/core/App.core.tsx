import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { coreRouter } from "@core/Router.core";

const queryClient = new QueryClient();

export const Application = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={coreRouter} />
      </QueryClientProvider>
      <ToastContainer theme="colored" />
    </>
  );
};
