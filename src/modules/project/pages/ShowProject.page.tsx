import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useProjectById } from "@api/project";
import { Button } from "@core/lib/shadcn/ui";
import { CreateTaskModal } from "@task/components/modals";

export const ShowProjectPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { project, projectIsError, projectIsLoading } = useProjectById(projectId);

  if (projectIsLoading) return <p>Loading...</p>;
  if (projectIsError) return <Navigate to="/project" />;

  return (
    <>
      <h1 className="text-5xl font-black">{project?.projectName}</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">{project?.description}</p>

      <nav className="my-5 flex gap-3">
        <Button type="button" onClick={() => navigate("?creating-task=true")}>
          Agregar tarea
        </Button>
      </nav>

      <CreateTaskModal />
    </>
  );
};
