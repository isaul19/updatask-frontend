import { Task } from "@api/task";
import { TaskCard } from "./TaskCard";

interface Props {
  tasks: Task[];
}

type GroupedTask = {
  [key: string]: Task[];
};

const initialStatusGroup: GroupedTask = {
  PENDING: [],
  ON_HOLD: [],
  IN_PROGRESS: [],
  UNDER_REVIEW: [],
  COMPLETED: [],
};

const statusTranslate: { [key: string]: string } = {
  PENDING: "Pendiente",
  ON_HOLD: "En espera",
  IN_PROGRESS: "En progreso",
  UNDER_REVIEW: "En revisión",
  COMPLETED: "Completado",
};

const statusColors: { [key: string]: string } = {
  PENDING: "border-t-slate-500",
  ON_HOLD: "border-t-red-500",
  IN_PROGRESS: "border-t-blue-500",
  UNDER_REVIEW: "border-t-amber-500",
  COMPLETED: "border-t-emerald-500",
};

export const TaskCardList = ({ tasks }: Props) => {
  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task];
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroup);

  return (
    <>
      <h2 className="text-5xl font-black my-10">Tareas</h2>

      <div className="flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32">
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} className="min-w-[300px] 2xl:min-w-0 2xl:w-1/5">
            <h3 className={`capitalize text-xl font-normal border ${statusColors[status]} bg-white p-3 border-t-8`}>
              {statusTranslate[status]}
            </h3>

            <ul className="mt-5 space-y-5">
              {tasks.length === 0 ? (
                <li className="text-gray-500 text-center pt-3">No Hay tareas</li>
              ) : (
                tasks.map((task) => <TaskCard key={task._id} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
