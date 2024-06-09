import { uptaskBackend } from "@core/lib/axios.lib";
import { Response } from "@api/types.api";
import { Task } from "../types";

export const listTasks = async (projectId: string): Promise<Response<Task[]>> => {
  const response = await uptaskBackend.get<Response<Task[]>>(`/project/${projectId}/task`);
  return response.data;
};
