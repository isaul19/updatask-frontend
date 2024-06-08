import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { CreateProjectDraft } from "@project/project.types";

export const CreateProjectPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectDraft>();

  const handleCreateProject = (data: CreateProjectDraft) => {};

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
          className="mt-10 bg-white shadow-lg p-10 rounded-lg flex flex-col gap-5"
          onSubmit={handleSubmit(handleCreateProject)}
          noValidate
        >
          <input
            placeholder="Nombre de cliente"
            {...register("clientName", {
              minLength: 2,
              required: true,
            })}
          />

          <input
            placeholder="Nombre del proyecto"
            {...register("projectName", {
              minLength: 2,
              required: true,
            })}
          />

          <input
            placeholder="Descripción"
            {...register("description", {
              minLength: 2,
              required: true,
            })}
          />

          <button
            type="submit"
            className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          >
            Crear Proyecto
          </button>
        </form>
      </div>
    </>
  );
};
