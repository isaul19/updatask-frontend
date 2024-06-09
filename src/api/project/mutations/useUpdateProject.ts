import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { ProjectDraft } from "@project/project.types";
import { PROJECTS_QUERY_KEY, PROJECT_QUERY_KEY } from "../config.project";
import { updateProject } from "../services";

export const useUpdateProject = (projectId: string) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: ProjectDraft) => updateProject(projectId, data),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [PROJECTS_QUERY_KEY],
      });

      client.invalidateQueries({
        queryKey: [PROJECT_QUERY_KEY, projectId],
      });
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
