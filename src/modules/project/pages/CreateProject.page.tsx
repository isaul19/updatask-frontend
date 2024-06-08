import { Link } from "react-router-dom";
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

  const createProject = useCreateProject();

  const handleCreateProject = async (data: ProjectDraft) => {
    await createProject.mutateAsync(data);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un proyecto</p>

        <nav className="my-5">
          <Link
            className="bg-primary hover:opacity-90 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to="/project"
          >
            Volver a Proyectos
          </Link>
        </nav>

        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg flex flex-col gap-8"
          onSubmit={handleSubmit(handleCreateProject)}
          noValidate
        >
          <CreateOrUpdateProjectInputs register={register} errors={errors} />

          <Button type="submit" size="lg">
            Crear Proyecto
          </Button>
        </form>
      </div>
    </>
  );
};
