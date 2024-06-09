import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { refreshProjectQuery } from "../config.project";
import { deleteProject } from "../services";

export const useDeleteProject = (projectId: string) => {
  const mutation = useMutation({
    mutationFn: () => deleteProject(projectId),
    onSuccess: () => {
      refreshProjectQuery(projectId);
      toast.success("Proyecto eliminado exitosamente");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.error ?? "Hubo un error al eliminar el proyecto";
        toast.error(errorMessage);
      }
    },
  });

  return mutation;
};
