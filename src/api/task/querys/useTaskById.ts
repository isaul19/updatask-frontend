import { useQuery } from "react-query";

import { PROJECT_QUERY_KEY } from "@api/project";
import { TASK_QUERY_KEY } from "../task.constants";
import { getTaskById } from "../task.service";

interface Params {
  taskId?: string;
  projectId?: string;
}

export const useTaskById = ({ projectId, taskId }: Params) => {
  const task = useQuery({
    queryKey: [PROJECT_QUERY_KEY, projectId, TASK_QUERY_KEY, taskId!],
    queryFn: () => getTaskById(projectId!, taskId!),
    enabled: !!projectId && !!taskId,
    retry: false,
  });

  return {
    task: task.data?.data,
    taskIsLoading: task.isFetching,
    taskIsError: task.isError,
    taskIsSuccess: task.isSuccess,
  };
};
