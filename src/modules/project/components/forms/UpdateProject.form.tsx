import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "@core/lib/shadcn/ui";
import { ProjectDraft, ProjectWithTasks, useUpdateProject } from "@api/project";
import { CreateOrUpdateProjectInputs } from "@project/components/input-groups";

interface Props {
  project: ProjectWithTasks;
}

export const UpdateProjectForm = ({ project }: Props) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectDraft>({
    defaultValues: project,
  });

  const updateProject = useUpdateProject(project._id);

  const handleUpdateProject = async (data: ProjectDraft) => {
    await updateProject.mutateAsync(data);
    navigate("/project");
  };

  return (
    <>
      <form
        className="mt-10 bg-white shadow-lg p-10 rounded-lg flex flex-col gap-8"
        onSubmit={handleSubmit(handleUpdateProject)}
        noValidate
      >
        <CreateOrUpdateProjectInputs register={register} errors={errors} />

        <Button variant="primary" type="submit" size="lg" disabled={updateProject.isLoading}>
          {updateProject.isLoading ? "Actualizando..." : "Actualizar Proyecto"}
        </Button>
      </form>
    </>
  );
};
