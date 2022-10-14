import { createContext, ReactNode, useState } from "react";

import isEmpty from "lodash/isEmpty";

type TasksContextProps = {
  children: ReactNode;
};

export type Task = {
  id: string;
  title: string;
  priority: string;
  status: string;
};

type TasksContextType = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

export const TasksContext = createContext<TasksContextType>(
  {} as TasksContextType
);

export const TasksContextProvider = ({ children }: TasksContextProps) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storageTasks = JSON.parse(
      localStorage.getItem("@viaTasks:tasks") ?? "{}"
    );
    return !isEmpty(storageTasks) ? storageTasks : [];
  });

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
