import { uptaskBackend } from "@core/lib/axios.lib";
import { ProjectDraft } from "@project/project.types";

export const createProject = async (data: ProjectDraft) => {
  const response = await uptaskBackend.post("/project", data);
  return response.data;
};
