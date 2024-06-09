export interface Project {
  _id: string;
  projectName: string;
  clientName: string;
  description: string;
  tasks: string[];
}

export interface ProjectWithTasks extends Project {
  tasks: Task[];
}
