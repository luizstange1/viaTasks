import { useState, useContext } from "react";
import { TasksContext, Task } from "../../contexts/TasksContext";

import * as S from "./styles";

interface ModalEditTaskTitleProps {
  isOpen: boolean;
  task: Task | null;
  closeModal: () => void;
}

export function ModalEditTaskTitle({
  isOpen,
  task,
  closeModal,
}: ModalEditTaskTitleProps) {
  const [newTitle, setNewTitle] = useState<string>(task?.title ?? "");
  const { tasks, setTasks } = useContext(TasksContext);

  function handleDisableModal() {
    closeModal();
    setNewTitle("");
  }

  function handleCheckEmptyInput(value: any) {
    if (!value) {
      return false;
    }

    return true;
  }

  function handleSaveNewTitle(e: any) {
    e.preventDefault();

    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask.id === task?.id) {
        return {
          ...currentTask,
          title: newTitle,
        };
      }
      return currentTask;
    });

    setTasks(updatedTasks);
    localStorage.setItem("@viaTasks:tasks", JSON.stringify(updatedTasks));
    handleDisableModal();
  }

  function handleKeyDown(event: any) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Content>
        <S.TitleContainer>
          <S.CloseModalIcon size={24} onClick={handleDisableModal} />
          <S.Title>Edite o título de sua tarefa</S.Title>
        </S.TitleContainer>

        <S.InputForm>
          <S.InputNewTitle
            maxLength={50}
            placeholder="Ex: Ir ao mercado"
            id="inputNewTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <S.ButtonSaveNewTitle
            onClick={handleSaveNewTitle}
            disabled={!handleCheckEmptyInput(newTitle)}
          >
            Salvar
          </S.ButtonSaveNewTitle>
        </S.InputForm>
      </S.Content>
    </S.Overlay>
  );
}
