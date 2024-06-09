export interface Project {
  projectName: string;
  clientName: string;
  description: string;
  tasks: string[];
}

export interface Task {
  name: string;
  description: string;
  project: string;
}
