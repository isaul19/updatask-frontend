import { useForm } from "react-hook-form";

import { Task, TaskDraft, useUpdateTask } from "@api/task";
import { CreateOrUpdateTaskInputs } from "../inputs-groups";
import { Button } from "@core/lib/shadcn/ui";
import { useSearchParam } from "@core/hooks";

interface Props {
  task: Task;
}

export const EditTaskForm = ({ task }: Props) => {
  const updateTask = useUpdateTask({ projectId: task.project, taskId: task._id });
  const [, setEditTaskId] = useSearchParam("edit-task");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskDraft>({ defaultValues: task });

  const handleUpdateTask = async (data: TaskDraft) => {
    await updateTask.mutateAsync(data);
    setEditTaskId(null);
  };

  return (
    <>
      <form className="mt-10 flex flex-col gap-10" noValidate onSubmit={handleSubmit(handleUpdateTask)}>
        <CreateOrUpdateTaskInputs register={register} errors={errors} />

        <Button variant="primary" size="lg" type="submit" disabled={updateTask.isLoading}>
          {updateTask.isLoading ? "Editando..." : "Editar Tarea"}
        </Button>
      </form>
    </>
  );
};
