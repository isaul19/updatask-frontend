import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { listTasks } from "../services";
import { TASKS_QUERY_KEY } from "../config.project";

export const useListTasks = (projectId?: string) => {
  const query = useQuery({
    queryKey: [TASKS_QUERY_KEY],
    queryFn: () => listTasks(projectId!),
    enabled: !!projectId,
    onError: () => {
      toast.error("Hubo un error al obtener las tareas");
    },
  });

  return {
    tasks: query.data?.data ?? [],
    tasksIsLoading: query.isFetching,
    tasksIsError: query.isError,
    tasksIsSuccess: query.isSuccess,
  };
};
