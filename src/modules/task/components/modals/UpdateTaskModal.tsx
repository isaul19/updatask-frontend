import { Fragment } from "react";
import { useParams } from "react-router-dom";

import { useTaskById } from "@api/task";
import { useSearchParam } from "@core/hooks";
import { UpdateTaskForm } from "../forms";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";

export const UpdateTaskModal = () => {
  const { projectId } = useParams();
  const [updateTaskId, setUpdateTaskId] = useSearchParam("update-task");

  const { task } = useTaskById({
    projectId: projectId,
    taskId: updateTaskId!,
  });

  if (!task) return null;

  return (
    <>
      <Transition appear show={!!updateTaskId} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setUpdateTaskId(null);
          }}
        >
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
                  <DialogTitle as="h3" className="font-black text-4xl  my-5">
                    Actualizar Tarea
                  </DialogTitle>

                  <p className="text-xl font-bold">
                    Llena el formulario y Actualiza {""}
                    <span className="text-fuchsia-600">una tarea</span>
                  </p>

                  <UpdateTaskForm task={task} />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
