import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { TASK_QUERY_KEY } from "../task.constants";
import { getTaskById } from "../task.service";

interface Params {
  taskId?: string;
  projectId?: string;
}

export const useTaskById = ({ projectId, taskId }: Params) => {
  const task = useQuery({
    enabled: !!projectId && !!taskId,
    queryKey: [TASK_QUERY_KEY, taskId!],
    queryFn: () => getTaskById(projectId!, taskId!),
    onError: () => {
      toast.error("No se pudo obtener la tarea");
    },
  });

  return {
    task: task.data?.data,
    taskIsLoading: task.isLoading,
    taskIsError: task.isError,
    taskIsSuccess: task.isSuccess,
    taskIsFetching: task.isFetching,
  };
};
