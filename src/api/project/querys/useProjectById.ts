import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { getProjectById } from "../services";
import { PROJECT_QUERY_KEY } from "../config.project";

export const useProjectById = (projectId?: string) => {
  const project = useQuery({
    queryKey: [PROJECT_QUERY_KEY, projectId],
    queryFn: () => getProjectById(projectId!),
    enabled: !!projectId,
    onError: () => {
      toast.error("Hubo un error al obtener el proyecto");
    },
  });

  return {
    project: project.data?.data,
    projectIsLoading: project.isFetching,
    projectIsError: project.isError,
    projectIsSuccess: project.isSuccess,
  };
};