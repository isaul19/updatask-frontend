import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Input, Label, Textarea } from "@core/lib/shadcn/ui";
import { ProjectDraft } from "@project/project.types";

interface Props {
  register: UseFormRegister<ProjectDraft>;
  errors: FieldErrors<ProjectDraft>;
}

export const CreateOrUpdateProjectInputs = ({ register, errors }: Props) => {
  return (
    <>
      <Label>
        Nombre del Cliente
        <Input
          placeholder="Ingresa el nombre del cliente"
          {...register("clientName", {
            minLength: {
              value: 2,
              message: "El Nombre del Cliente debe tener al menos 2 caracteres",
            },
            required: "El Nombre del Cliente es requerido",
          })}
          errorMessage={errors.clientName?.message}
        />
      </Label>

      <Label>
        Nombre del proyecto
        <Input
          placeholder="Ingresa el nombre del proyecto"
          {...register("projectName", {
            minLength: {
              value: 2,
              message: "El Nombre del Proyecto debe tener al menos 2 caracteres",
            },
            required: "El Nombre del Proyecto es requerido",
          })}
          errorMessage={errors.projectName?.message}
        />
      </Label>

      <Label>
        Descripción
        <Textarea
          placeholder="Ingresa una descripción"
          {...register("description", {
            minLength: {
              value: 2,
              message: "La descripción debe tener al menos 2 caracteres",
            },
            required: "La descripción es requerida",
          })}
          errorMessage={errors.description?.message}
        />
      </Label>
    </>
  );
};
