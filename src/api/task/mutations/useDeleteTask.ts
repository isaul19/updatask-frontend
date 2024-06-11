import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { PROJECT_QUERY_KEY } from "@api/project";
import { deleteTask } from "../task.service";
import { TASKS_QUERY_KEY, TASK_QUERY_KEY } from "../task.constants";

interface Params {
  projectId: string;
  taskId: string;
}

export const useDeleteTask = ({ projectId, taskId }: Params) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteTask(projectId, taskId),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [PROJECT_QUERY_KEY, projectId, TASKS_QUERY_KEY],
      });

      client.removeQueries({
        queryKey: [PROJECT_QUERY_KEY, projectId, TASK_QUERY_KEY, taskId],
      });

      toast.success("Tarea Eliminada");
    },
  });

  return mutation;
};
