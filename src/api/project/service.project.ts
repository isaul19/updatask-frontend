import { uptaskBackend } from "@core/lib/axios.lib";
import { ProjectDraft } from "@project/project.types";

import { Response, ResponseMessage } from "@api/types.api";
import { Project } from "@api/project/types.project";

export const createProject = async (data: ProjectDraft): Promise<ResponseMessage> => {
  const response = await uptaskBackend.post<ResponseMessage>("/project", data);
  return response.data;
};

export const listProjects = async (): Promise<Response<Project[]>> => {
  const response = await uptaskBackend.get<Response<Project[]>>("/project");
  return response.data;
};

export const updateProject = async (projectId: string, data: ProjectDraft): Promise<ResponseMessage> => {
  const response = await uptaskBackend.put<ResponseMessage>(`/project/${projectId}`, data);
  return response.data;
};

export const deleteProject = async (projectId: string): Promise<ResponseMessage> => {
  const response = await uptaskBackend.delete<ResponseMessage>(`/project/${projectId}`);
  return response.data;
};
