import { uptaskBackend } from "@core/lib/axios.lib";
import { Response, ResponseMessage } from "@api/types.api";
import { Task, TaskDraft } from "./task.type";

export const listTasks = async (projectId: string): Promise<Response<Task[]>> => {
  const response = await uptaskBackend.get<Response<Task[]>>(`/project/${projectId}/task`);
  return response.data;
};

export const createTask = async (projectId: string, task: TaskDraft): Promise<ResponseMessage> => {
  const response = await uptaskBackend.post<ResponseMessage>(`/project/${projectId}/task`, task);
  return response.data;
};

export const updateTask = async (projectId: string, taskId: string, task: TaskDraft): Promise<ResponseMessage> => {
  const response = await uptaskBackend.put<ResponseMessage>(`/project/${projectId}/task/${taskId}`, task);
  return response.data;
};

export const deleteTask = async (projectId: string, taskId: string): Promise<ResponseMessage> => {
  const response = await uptaskBackend.delete<ResponseMessage>(`/project/${projectId}/task/${taskId}`);
  return response.data;
};
