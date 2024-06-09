export interface Task {
  _id: string;
  name: string;
  description: string;
  project: string;
}

export interface TaskDraft extends Pick<Task, "description" | "name" | "project"> {}
