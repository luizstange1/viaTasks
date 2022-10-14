import * as S from "./styles";

import { useContext, useState } from "react";
import { Task, TasksContext } from "../../contexts/TasksContext";

import { Header } from "../../components/Header/index";
import { ModalAddTask } from "../../components/ModalAddTask/index";
import { ModalEditTaskTitle } from "../../components/ModalEditTaskTitle/index";

export function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [filter, setFilter] = useState("Todas");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectFilterAllTasks, setSelectFilterAllTasks] =
    useState<boolean>(true);
  const [selectFilterInProgressTasks, setSelectFilterInProgressTasks] =
    useState<boolean>(false);
  const [selectCompletedTasksFilter, setSelectCompletedTasksFilter] =
    useState<boolean>(false);
  const [isOpenModalTitleEdit, setIsOpenModalTitleEdit] =
    useState<boolean>(false);
  const [isOpenModalAddTask, setIsOpenModalAddTask] = useState<boolean>(false);

  const countTasksInProgress = tasks.reduce((acc, task) => {
    if (task.status === "Em andamento") {
      return acc + 1;
    }
    return acc;
  }, 0);

  const countCompletedTasks = tasks.reduce((acc, task) => {
    if (task.status === "Concluída") {
      return acc + 1;
    }
    return acc;
  }, 0);

  const countAllTasks = tasks.length;

  function handleActivateModalAddTask() {
    setIsOpenModalAddTask(true);
  }

  function handleActiveModalEditTaskTitle(task: Task) {
    setIsOpenModalTitleEdit(true);
    setSelectedTask(task);
  }

  function handleDeleteTask(taskId: string) {
    const updatedTasks = tasks.filter((task) => {
      return taskId !== task.id;
    });

    setTasks(updatedTasks);
    localStorage.setItem("@viaTasks:tasks", JSON.stringify(updatedTasks));
  }

  function handleUpdateTaskToCompleted(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (taskId === task.id) {
        task.status = "Concluída";
      }

      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("@viaTasks:tasks", JSON.stringify(updatedTasks));
  }

  function handleUpdateTaskToInProgress(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (taskId === task.id) {
        task.status = "Em andamento";
      }

      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("@viaTasks:tasks", JSON.stringify(updatedTasks));
  }

  function handleClickFilterAllTasks() {
    setFilter("Todas");
    setSelectFilterAllTasks(true);
    setSelectFilterInProgressTasks(false);
    setSelectCompletedTasksFilter(false);
  }

  function handleClickFilterTasksInProgress() {
    setFilter("Em andamento");
    setSelectFilterInProgressTasks(true);
    setSelectCompletedTasksFilter(false);
    setSelectFilterAllTasks(false);
  }

  function handleClickFilterCompletedTasks() {
    setFilter("Concluída");
    setSelectCompletedTasksFilter(true);
    setSelectFilterAllTasks(false);
    setSelectFilterInProgressTasks(false);
  }

  const tasksAllList =
    filter === "Em andamento"
      ? tasks.filter((task) => task.status === "Em andamento")
      : filter === "Concluída"
      ? tasks.filter((task) => task.status === "Concluída")
      : tasks;

  return (
    <>
      <Header />

      <S.Container>
        <S.HeaderContainer>
          <S.Wrapper>
            <S.Title>Minhas tarefas</S.Title>
            <S.Description>
              Organize suas tarefas e melhore sua rotina!{" "}
              <S.HeartIcon size={20} />
            </S.Description>
          </S.Wrapper>

          <S.ContainerTasksFilters>
            Filtrar por:
            <S.FilterAllTasks
              onClick={handleClickFilterAllTasks}
              isSelected={selectFilterAllTasks}
            >
              Todas | {countAllTasks}
            </S.FilterAllTasks>
            <S.FilterTasksInProgress
              onClick={handleClickFilterTasksInProgress}
              isSelected={selectFilterInProgressTasks}
            >
              Em andamento | {countTasksInProgress}
            </S.FilterTasksInProgress>
            <S.FilterCompletedTasks
              onClick={handleClickFilterCompletedTasks}
              isSelected={selectCompletedTasksFilter}
            >
              Concluídas | {countCompletedTasks}
            </S.FilterCompletedTasks>
          </S.ContainerTasksFilters>

          <S.ButtonAddTasks onClick={handleActivateModalAddTask}>
            Adicionar tarefa
          </S.ButtonAddTasks>
        </S.HeaderContainer>

        <S.TasksSection>
          <S.TasksSectionInfos>
            <S.TasksListTitle>Tarefa</S.TasksListTitle>
            <S.TasksListPriority>Prioridade</S.TasksListPriority>
            <S.TasksListStatus>Status</S.TasksListStatus>
          </S.TasksSectionInfos>

          <S.TasksList>
            {tasksAllList.map((task) => {
              return (
                <S.Task key={task.id}>
                  <S.TaskDescriptionTitle>
                    <S.TaskTitleEditIcon
                      size={16}
                      onClick={() => handleActiveModalEditTaskTitle(task)}
                    />
                    {task.title}
                  </S.TaskDescriptionTitle>

                  <S.TaskPriority>{task.priority}</S.TaskPriority>
                  <S.TaskStatus status={task.status}>
                    {task.status}
                  </S.TaskStatus>

                  <S.ButtonsSetStatusTask>
                    <S.ButtonChangeTaskStatus>
                      {task.status === "Em andamento" ? (
                        <S.CheckIcon
                          size={26}
                          onClick={() => handleUpdateTaskToCompleted(task.id)}
                        />
                      ) : (
                        <S.ProgressIcon
                          size={26}
                          onClick={() => handleUpdateTaskToInProgress(task.id)}
                        />
                      )}
                    </S.ButtonChangeTaskStatus>
                    <S.ButtonDeleteTask title="Excluir tarefa">
                      <S.TrashIcon
                        size={26}
                        onClick={() => handleDeleteTask(task.id)}
                      />
                    </S.ButtonDeleteTask>
                  </S.ButtonsSetStatusTask>
                </S.Task>
              );
            })}
          </S.TasksList>
        </S.TasksSection>

        <ModalAddTask
          isOpen={isOpenModalAddTask}
          closeModal={() => setIsOpenModalAddTask(false)}
        />
        <ModalEditTaskTitle
          isOpen={isOpenModalTitleEdit}
          task={selectedTask}
          closeModal={() => setIsOpenModalTitleEdit(false)}
        />
      </S.Container>
    </>
  );
}
