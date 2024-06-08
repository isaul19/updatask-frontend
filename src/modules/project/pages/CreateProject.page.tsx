import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ProjectDraft } from "@project/project.types";
import { Button } from "@core/lib/shadcn/ui";
import { CreateOrUpdateProjectInputs } from "@project/components/input-groups";
import { useCreateProject } from "@api/project";

export const CreateProjectPage = () => {
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
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un proyecto</p>

        <nav className="my-5">
          <Link to="/project">
            <Button size="lg">Volver a Proyectos</Button>
          </Link>
        </nav>

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
      </div>
    </>
  );
};
