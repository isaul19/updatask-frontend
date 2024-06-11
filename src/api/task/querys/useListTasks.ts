import { useQuery } from "react-query";

import { PROJECT_QUERY_KEY } from "@api/project";
import { TASKS_QUERY_KEY } from "../task.constants";
import { listTasks } from "../task.service";

export const useListTasks = (projectId?: string) => {
  const query = useQuery({
    queryKey: [PROJECT_QUERY_KEY, projectId, TASKS_QUERY_KEY],
    queryFn: () => listTasks(projectId!),
    enabled: !!projectId,
    retry: false,
  });

  return {
    tasks: query.data?.data ?? [],
    tasksIsLoading: query.isFetching,
    tasksIsError: query.isError,
    tasksIsSuccess: query.isSuccess,
  };
};
