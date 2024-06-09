import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@api/project";

interface Props {
  projects: Project[];
}

export const ProjectCardList = ({ projects }: Props) => {
  return (
    <>
      {projects.length === 0 && (
        <p className="text-center py-20">
          No hay proyectos{" "}
          <Link to="/project/create" className="text-fuchsia-500 font-bold">
            Crear Proyecto
          </Link>
        </p>
      )}

      <ul role="list" className="divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>
    </>
  );
};
