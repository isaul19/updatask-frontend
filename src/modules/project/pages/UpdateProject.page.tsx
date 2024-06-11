import { Link, Navigate, useParams } from "react-router-dom";

import { Button } from "@core/lib/shadcn/ui";
import { UpdateProjectForm } from "@project/components/forms";
import { useProjectById } from "@api/project";

export const UpdateProjectPage = () => {
  const { projectId } = useParams();
  const { project, projectIsLoading } = useProjectById(projectId);

  if (projectIsLoading) return <p>Loading...</p>;
  if (!project) return <Navigate to="/404" />;

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Actualizar proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          Llena el siguiente formulario para actualizar un proyecto
        </p>

        <nav className="my-5">
          <Link to="/project">
            <Button size="lg">Volver a Proyectos</Button>
          </Link>
        </nav>

        <UpdateProjectForm project={project} />
      </div>
    </>
  );
};
