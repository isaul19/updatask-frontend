import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { createProject } from "../service.project";
import { refreshProjectQuery } from "../config.project";

export const useCreateProject = () => {
  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      refreshProjectQuery();
      toast.success("Proyecto creado exitosamente");
    },
    onError: () => {
      toast.error("Hubo un error al crear el proyecto");
    },
  });

  return mutation;
};
