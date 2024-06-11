import { Fragment } from "react";
import { Navigate, useParams } from "react-router-dom";
import moment from "moment";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { useSearchParam } from "@core/hooks";
import { useTaskById } from "@api/task";

export const ShowTaskModal = () => {
  const [showTaskId, setShowTaskId] = useSearchParam("show-task");
  const { projectId } = useParams();

  const { task, taskIsLoading, taskIsError } = useTaskById({
    taskId: showTaskId!,
    projectId: projectId!,
  });

  if (taskIsLoading) return null;
  if (taskIsError) return <Navigate to="/404" />;
  if (!task) return null;

  return (
    <>
      <Transition appear show={!!showTaskId} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowTaskId(null)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <p className="text-sm text-slate-400">
                    Agregada el: {moment(task.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                  <p className="text-sm text-slate-400">
                    Última actualización: {moment(task.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                  <DialogTitle as="h3" className="font-black text-4xl text-slate-600 my-5">
                    {task.name}
                  </DialogTitle>
                  <p className="text-lg text-slate-500 mb-2">Descripción: {task.description}</p>
                  <div className="my-5 space-y-3">
                    <label className="font-bold">Estado Actual: {task.status}</label>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
