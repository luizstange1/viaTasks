import styled, { css } from "styled-components";

import {
  Heart as HeartIconPhosphor,
  Trash as TrashIconPhosphor,
  Check as CheckIconPhosphor,
  Timer as TaskInProgressPhosphor,
  Pencil as EditTaskTitlePhosphor,
} from "phosphor-react";

import curriedDarken from "polished/lib/color/darken";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 50rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media (max-width: 1360px) {
    max-width: 960px;
  }

  @media (max-width: 1060px) {
    max-width: 760px;
  }

  @media (max-width: 800px) {
    max-width: 600px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  @media (max-width: 1060px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors["gray-100"]};
`;

export const Description = styled.span`
  color: ${(props) => props.theme.colors["gray-300"]};
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`;

export const HeartIcon = styled(HeartIconPhosphor)`
  color: ${(props) => props.theme.colors.primaryColor};

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerTasksFilters = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: flex-start;
  }

  @media (max-width: 800px) {
    max-width: 480px;
    align-items: center;
  }
`;

export const FilterAllTasks = styled.button<{ isSelected: boolean }>`
  cursor: pointer;
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 0;
  background-color: ${({ isSelected }) =>
    isSelected ? curriedDarken(0.07, "#6A5ACD") : "#6A5ACD"};
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9rem;

  transition: 0.2s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
  }

  @media (max-width: 1060px) {
    padding: 0.5rem 0.5rem;
    width: 10rem;
  }

  @media (max-width: 800px) {
    padding: 0.5rem 0.5rem;
    width: 10rem;
  }
`;

export const FilterTasksInProgress = FilterAllTasks;

export const FilterCompletedTasks = FilterAllTasks;

export const ButtonAddTasks = styled.button`
  height: 3rem;
  width: 8rem;
  border: 0;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.buttonColor};
  font-weight: 700;
  font-size: 0.9rem;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
    width: 12rem;
  }
`;

export const TasksSection = styled.div`
  height: 35rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const TasksSectionInfos = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors["gray-600"]};
  padding-left: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
`;

export const Task = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors["gray-700"]};
  padding-left: 1rem;
  height: 3rem;
`;

export const TasksListTitle = styled.div`
  width: 50%;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  color: ${(props) => props.theme.colors["gray-100"]};

  @media (max-width: 800px) {
    width: 40%;
  }
`;

export const TasksListPriority = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  color: ${(props) => props.theme.colors["gray-100"]};

  @media (max-width: 800px) {
    width: 27.5%;
  }
`;

export const TasksListStatus = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  color: ${(props) => props.theme.colors["gray-100"]};

  @media (max-width: 800px) {
    width: 27.5%;
  }
`;

export const TaskDescriptionTitle = styled.div`
  color: ${(props) => props.theme.colors["gray-300"]};
  width: 50%;
  display: flex;
  column-gap: 1rem;
  align-items: center;

  @media (max-width: 800px) {
    width: 45%;
  }
`;

export const TaskPriority = styled.div`
  color: ${(props) => props.theme.colors["gray-300"]};
  width: 25%;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 27.5%;
  }
`;

export const TaskStatus = styled.div<{ status: string }>`
  color: ${(props) => props.theme.colors["gray-300"]};
  width: 12.5%;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  ${(props) => {
    if (props.status === "Concluída") {
      return css`
        :before {
          content: "";
          border: 3px solid ${props.theme.colors.statusTaskColors.completed};
          border-radius: 0.5rem;
        }
      `;
    }
    if (props.status === "Em andamento") {
      return css`
        :before {
          content: "";
          border: 3px solid
            ${(props) => props.theme.colors.statusTaskColors.inProgress};
          border-radius: 0.5rem;
        }
      `;
    }
  }}

  @media (max-width: 1360px) {
    width: 15%;
  }

  @media (max-width: 800px) {
    :before {
      display: none;
    }

    width: 21.5%;
  }
`;

export const ButtonsSetStatusTask = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 12.5%;

  @media (max-width: 1360px) {
    width: 10%;
  }

  @media (max-width: 800px) {
    width: 13.75%;
  }
`;

export const ButtonDeleteTask = styled.button`
  background-color: transparent;
  border: none;
`;

export const ButtonChangeTaskStatus = styled.button`
  background-color: transparent;
  border: none;
`;

export const TrashIcon = styled(TrashIconPhosphor)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  :hover {
    color: ${(props) => props.theme.colors.deleteTaskIcon};
  }
`;

export const CheckIcon = styled(CheckIconPhosphor)`
  color: ${(props) => props.theme.colors.taskCompleteIcon};
  cursor: pointer;
`;

export const ProgressIcon = styled(TaskInProgressPhosphor)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    color: ${(props) => props.theme.colors.taskInProgressIcon};
  }
`;

export const TaskTitleEditIcon = styled(EditTaskTitlePhosphor)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.buttonColor};
  }
`;
