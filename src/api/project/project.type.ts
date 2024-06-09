import { Task } from "@api/task/task.type";

export interface Project {
  _id: string;
  projectName: string;
  clientName: string;
  description: string;
  tasks: string[];
}

export interface ProjectWithTasks extends Omit<Project, "tasks"> {
  tasks: Task[];
}

export interface ProjectDraft extends Pick<Project, "clientName" | "description" | "projectName"> {}
