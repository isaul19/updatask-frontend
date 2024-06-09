import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { ProjectDraft } from "@project/project.types";
import { updateProject } from "../service.project";
import { refreshProjectQuery } from "../config.project";

export const useUpdateProject = (projectId: string) => {
  const mutation = useMutation({
    mutationFn: (data: ProjectDraft) => updateProject(projectId, data),
    onSuccess: () => {
      refreshProjectQuery(projectId);
      toast.success("Proyecto actualizado exitosamente");
    },
    onError: () => {
      toast.error("Hubo un error al actualizar el proyecto");
    },
  });

  return mutation;
};
