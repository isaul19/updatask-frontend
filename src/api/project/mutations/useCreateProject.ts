import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createProject } from "../service.project";

export const useCreateProject = () => {
  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast.success("Proyecto creado exitosamente");
    },
    onError: () => {
      toast.error("Hubo un error al crear el proyecto");
    },
  });

  return mutation;
};
