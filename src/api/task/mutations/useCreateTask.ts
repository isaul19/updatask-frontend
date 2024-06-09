import { useMutation, useQueryClient } from "react-query";

import { TaskDraft } from "../task.type";
import { createTask } from "../task.service";
import { TASKS_QUERY_KEY } from "../task.constants";
import { toast } from "react-toastify";

interface Params {
  projectId: string;
}

export const useCreateTask = ({ projectId }: Params) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: TaskDraft) => createTask(projectId, data),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [TASKS_QUERY_KEY],
      });

      toast.success("Tarea creada exitosamente");
    },
  });

  return mutation;
};
