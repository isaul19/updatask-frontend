import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { TaskDraft, useCreateTask } from "@api/task";
import { Button } from "@core/lib/shadcn/ui";
import { CreateOrUpdateTaskInputs } from "../inputs-groups";
import { useSearchParam } from "@core/hooks";

export const CreateTaskForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskDraft>();

  const { projectId } = useParams();
  const [, setIsCreatingTask] = useSearchParam("creating-task");

  const createTask = useCreateTask({
    projectId: projectId!,
  });

  const handleCreateTask = async (data: TaskDraft) => {
    await createTask.mutateAsync(data);
    setIsCreatingTask(null);
  };

  return (
    <>
      <form className="mt-10 flex flex-col gap-10" noValidate onSubmit={handleSubmit(handleCreateTask)}>
        <CreateOrUpdateTaskInputs register={register} errors={errors} />

        <Button variant="primary" size="lg" type="submit" disabled={createTask.isLoading}>
          {createTask.isLoading ? "Guardando..." : "Guardar Tarea"}
        </Button>
      </form>
    </>
  );
};
