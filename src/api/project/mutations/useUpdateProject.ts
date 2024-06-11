import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { PROJECTS_QUERY_KEY, PROJECT_QUERY_KEY } from "../constants.project";
import { updateProject } from "../project.service";
import { ProjectDraft } from "../project.type";

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
      toast.success("Proyecto Actualizado");
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
