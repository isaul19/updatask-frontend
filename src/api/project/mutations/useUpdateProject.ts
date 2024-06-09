import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { ProjectDraft } from "@project/project.types";
import { refreshProjectQuery } from "../config.project";
import { updateProject } from "../services";

export const useUpdateProject = (projectId: string) => {
  const mutation = useMutation({
    mutationFn: (data: ProjectDraft) => updateProject(projectId, data),
    onSuccess: () => {
      refreshProjectQuery(projectId);
      toast.success("Proyecto actualizado exitosamente");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.error ?? "Hubo un error al actualizar el proyecto";
        toast.error(errorMessage);
      }
    },
  });

  return mutation;
};
