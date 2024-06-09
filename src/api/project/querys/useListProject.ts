import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { listProjects } from "../service.project";
import { PROJECT_QUERY_KEY } from "../config.project";

export const useListProjects = () => {
  const query = useQuery({
    queryKey: [PROJECT_QUERY_KEY],
    queryFn: listProjects,
    onSuccess: () => {
      toast.success("Proyectos obtenidos exitosamente");
    },
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
