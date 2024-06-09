import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { PROJECTS_QUERY_KEY } from "../constants.project";
import { deleteProject } from "../project.service";

export const useDeleteProject = (projectId: string) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteProject(projectId),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [PROJECTS_QUERY_KEY],
      });
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
