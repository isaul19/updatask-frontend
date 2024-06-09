import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { refreshProjectQuery } from "../config.project";
import { createProject } from "../services";

export const useCreateProject = () => {
  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      refreshProjectQuery();
      toast.success("Proyecto creado exitosamente");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.error ?? "Hubo un error al crear el proyecto";
        toast.error(errorMessage);
      }
    },
  });

  return mutation;
};
