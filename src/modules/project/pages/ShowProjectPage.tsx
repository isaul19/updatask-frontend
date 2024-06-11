import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useProjectById } from "@api/project";
import { Button } from "@core/lib/shadcn/ui";
import { CreateTaskModal, ShowTaskModal } from "@task/components/modals";
import { TaskCardList } from "@task/components/TaskCardList";
import { UpdateTaskModal } from "@task/components/modals";
import { useListTasks } from "@api/task";

export const ShowProjectPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { project, projectIsLoading } = useProjectById(projectId);
  const { tasks } = useListTasks(projectId);

  if (projectIsLoading) return <p>Loading...</p>;
  if (!project) return <Navigate to="/404" />;

  return (
    <>
      <h1 className="text-5xl font-black capitalize">{project.projectName}</h1>
      <p className="text-2xl font-light text-gray-500 mt-5 capitalize">{project.description}</p>
      <nav className="my-5 flex gap-3">
        <Button type="button" onClick={() => navigate("?creating-task=true")}>
          Agregar tarea
        </Button>
      </nav>

      <TaskCardList tasks={tasks} />

      <CreateTaskModal />
      <UpdateTaskModal />
      <ShowTaskModal />
    </>
  );
};
