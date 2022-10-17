import * as S from "./styles";

import { useContext, useState } from "react";
import { Task, TasksContext } from "../../contexts/TasksContext";

import { v4 as uuidv4 } from "uuid";

interface ModalAddTasksProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function ModalAddTask({ isOpen, closeModal }: ModalAddTasksProps) {
  const [inputTask, setInputTask] = useState<string>("");
  const { tasks, setTasks } = useContext(TasksContext);

  function handleDisableModal() {
    closeModal();
    setInputTask("");
  }

  function handleSaveNewTask() {
    const title = document.getElementById(
      "inputTitleNewTask"
    ) as HTMLInputElement;

    const priority = document.getElementById(
      "selectStatusNewTask"
    ) as HTMLSelectElement;

    const newTask: Task = {
      id: uuidv4(),
      title: title.value,
      priority: priority.value,
      status: "Em andamento",
    };

    setTasks([...tasks, newTask]);
    localStorage.setItem(
      "@viaTasks:tasks",
      JSON.stringify([...tasks, newTask])
    );
    setInputTask("");
    handleDisableModal();
  }

  function handleCheckEmptyInput(value: any) {
    if (!value.trim()) return false;
    return true;
  }

  function handleKeyDown(event: any) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  const statusOptions = ["Baixa", "Média", "Alta"];

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Content>
        <S.TitleContainer>
          <S.CloseModalIcon size={24} onClick={handleDisableModal} />
          <S.Title>Adicione uma tarefa</S.Title>
        </S.TitleContainer>

        <S.InputForm>
          <S.Caption>Dê um titulo para sua tarefa</S.Caption>
          <S.InputAddTitleTask
            placeholder="Ex: Lavar o carro"
            maxLength={50}
            type="text"
            id="inputTitleNewTask"
            onKeyDown={handleKeyDown}
            autoComplete="off"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
        </S.InputForm>

        <S.SelectPriorityContainer>
          <S.Caption>Selecione a prioridade de sua tarefa</S.Caption>
          <S.SelectPriorityTask id="selectStatusNewTask">
            {statusOptions.map((option) => {
              return (
                <S.OptionsSelectPriority key={option}>
                  {option}
                </S.OptionsSelectPriority>
              );
            })}
          </S.SelectPriorityTask>
        </S.SelectPriorityContainer>

        <S.ButtonContainer>
          <S.ButtonSaveTask
            title="Salvar tarefa"
            id="buttonSaveTask"
            onClick={handleSaveNewTask}
            disabled={!handleCheckEmptyInput(inputTask)}
          >
            Salvar
          </S.ButtonSaveTask>
        </S.ButtonContainer>
      </S.Content>
    </S.Overlay>
  );
}
