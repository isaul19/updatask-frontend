import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { PROJECT_QUERY_KEY } from "@api/project";
import { TaskDraft } from "../task.type";
import { createTask } from "../task.service";
import { TASKS_QUERY_KEY } from "../task.constants";

interface Params {
  projectId: string;
}

export const useCreateTask = ({ projectId }: Params) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: TaskDraft) => createTask(projectId, data),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [PROJECT_QUERY_KEY, projectId, TASKS_QUERY_KEY],
      });

      toast.success("Tarea Creada");
    },
  });

  return mutation;
};
