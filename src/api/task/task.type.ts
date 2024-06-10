export const taskStatus = {
  PENDING: "PENDING",
  ON_HOLD: "ON_HOLD",
  IN_PROGRESS: "IN_PROGRESS",
  UNDER_REVIEW: "UNDER_REVIEW",
  COMPLETED: "COMPLETED",
} as const;

export type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus];

export interface Task {
  _id: string;
  name: string;
  description: string;
  project: string;
  status: TaskStatus;
}

export interface TaskDraft extends Pick<Task, "description" | "name"> {}
