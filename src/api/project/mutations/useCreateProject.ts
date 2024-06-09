import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { createProject } from "../services";
import { PROJECTS_QUERY_KEY } from "../config.project";

export const useCreateProject = () => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [PROJECTS_QUERY_KEY],
      });
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
