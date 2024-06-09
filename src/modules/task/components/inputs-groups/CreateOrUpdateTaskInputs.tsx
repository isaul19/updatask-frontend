import { TaskDraft } from "@api/task";
import { Input, Label } from "@core/lib/shadcn/ui";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  errors: FieldErrors<TaskDraft>;
  register: UseFormRegister<TaskDraft>;
}

export const CreateOrUpdateTaskInputs = ({ errors, register }: Props) => {
  return (
    <>
      <Label>
        Nombre de la tarea
        <Input
          placeholder="Ingresa una descripción"
          {...register("name", {
            minLength: {
              value: 2,
              message: "El Nombre debe tener al menos 2 caracteres",
            },
            required: "El Nombre de la tarea es obligatorio",
          })}
          errorMessage={errors.name?.message}
        />
      </Label>

      <Label>
        Descripción de la tarea
        <Input
          placeholder="Ingresa una descripción"
          {...register("description", {
            minLength: {
              value: 2,
              message: "La Descripción debe tener al menos 2 caracteres",
            },
            required: "La Descripción de la tarea es obligatoria",
          })}
          errorMessage={errors.description?.message}
        />
      </Label>
    </>
  );
};
