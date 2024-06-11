import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "@core/lib/shadcn/ui";
import { ProjectDraft, useCreateProject } from "@api/project";
import { CreateOrUpdateProjectInputs } from "@project/components/input-groups";

export const CreateProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectDraft>();

  const navigate = useNavigate();
  const createProject = useCreateProject();

  const handleCreateProject = async (data: ProjectDraft) => {
    await createProject.mutateAsync(data);
    navigate("/project");
  };

  return (
    <>
      <form
        className="mt-10 bg-white shadow-lg p-10 rounded-lg flex flex-col gap-8"
        onSubmit={handleSubmit(handleCreateProject)}
        noValidate
      >
        <CreateOrUpdateProjectInputs register={register} errors={errors} />

        <Button variant="primary" type="submit" size="lg" disabled={createProject.isLoading}>
          {createProject.isLoading ? "Creando..." : "Crear Proyecto"}
        </Button>
      </form>
    </>
  );
};
