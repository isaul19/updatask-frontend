import { Link } from "react-router-dom";

import { Button } from "@core/lib/shadcn/ui";
import { useListProjects } from "@api/project";
import { ProjectCardList } from "@project/components/ProjectCardList";

const ListProjectPage = () => {
  const { projects } = useListProjects();

  return (
    <>
      <h1 className="text-5xl font-black">Mis proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Maneja y adminstra tus proyectos</p>

      <nav className="my-5">
        <Link to="/project/create">
          <Button size="lg">Nuevo Proyecto</Button>
        </Link>
      </nav>

      <ProjectCardList projects={projects} />
    </>
  );
};

export default ListProjectPage;
