import { useQuery } from "react-query";

import { PROJECT_QUERY_KEY } from "../constants.project";
import { getProjectById } from "../project.service";

export const useProjectById = (projectId?: string) => {
  const project = useQuery({
    queryKey: [PROJECT_QUERY_KEY, projectId!],
    queryFn: () => getProjectById(projectId!),
    enabled: !!projectId,
    retry: false,
  });

  return {
    project: project.data?.data,
    projectIsLoading: project.isFetching,
    projectIsError: project.isError,
    projectIsSuccess: project.isSuccess,
  };
};
