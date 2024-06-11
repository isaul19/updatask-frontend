import { useQuery } from "react-query";

import { PROJECTS_QUERY_KEY } from "../constants.project";
import { listProjects } from "../project.service";

export const useListProjects = () => {
  const query = useQuery({
    queryKey: [PROJECTS_QUERY_KEY],
    queryFn: listProjects,
  });

  return {
    projects: query.data?.data ?? [],
    projectsIsLoading: query.isFetching,
    projectsIsError: query.isError,
    projectsIsSuccess: query.isSuccess,
  };
};
