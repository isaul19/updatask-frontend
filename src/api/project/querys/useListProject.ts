import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { PROJECTS_QUERY_KEY } from "../constants.project";
import { listProjects } from "../project.service";

export const useListProjects = () => {
  const query = useQuery({
    queryKey: [PROJECTS_QUERY_KEY],
    queryFn: listProjects,
    onError: () => {
      toast.error("Hubo un error al obtener los proyectos");
    },
  });

  return {
    projects: query.data?.data ?? [],
    projectsIsLoading: query.isFetching,
    projectsIsError: query.isError,
    projectsIsSuccess: query.isSuccess,
  };
};
