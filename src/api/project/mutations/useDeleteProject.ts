import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { refreshProjectQuery } from "../config.project";
import { deleteProject } from "../services";

export const useDeleteProject = (projectId: string) => {
  const mutation = useMutation({
    mutationFn: () => deleteProject(projectId),
    onSuccess: () => {
      refreshProjectQuery(projectId);
      toast.success("Proyecto eliminado exitosamente");
    },
    onError: () => {
      toast.error("Hubo un error al eliminar el proyecto");
    },
  });

  return mutation;
};
