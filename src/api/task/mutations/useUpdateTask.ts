import { useMutation, useQueryClient } from "react-query";

import { TaskDraft } from "../task.type";
import { updateTask } from "../task.service";
import { TASKS_QUERY_KEY, TASK_QUERY_KEY } from "../task.constants";

interface Params {
  projectId: string;
  taskId: string;
}

export const useUpdateTask = ({ projectId, taskId }: Params) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: TaskDraft) => updateTask(projectId, taskId, data),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [TASKS_QUERY_KEY],
      });

      client.invalidateQueries({
        queryKey: [TASK_QUERY_KEY, taskId],
      });
    },
  });

  return mutation;
};
