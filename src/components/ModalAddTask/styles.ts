import styled from "styled-components";

import { X as CloseModalIconPhosphor } from "phosphor-react";

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1500;
  inset: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseModalIcon = styled(CloseModalIconPhosphor)`
  color: ${(props) => props.theme.colors.white};
  z-index: 2000;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors["gray-700"]};
  width: 40rem;
  height: 30rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  border-radius: 8px;
  box-shadow: 4px 10px 24px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 680px) {
    width: 25rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.h3`
  color: ${(props) => props.theme.colors["gray-100"]}; ;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const InputAddTitleTask = styled.input`
  padding-left: 0.5rem;
  width: 70%;
  height: 2.5rem;
  border-radius: 8px;
  outline-color: ${(props) => props.theme.colors.primaryColor};
  border: 0;
  font-size: 1rem;
`;

export const SelectPriorityContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
`;

export const SelectPriorityTask = styled.select`
  width: 8rem;
  height: 2rem;
  border-radius: 8px;
  border: 0;
`;

export const OptionsSelectPriority = styled.option``;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
`;

export const ButtonSaveTask = styled.button`
  height: 3rem;
  width: 8rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.buttonColor};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    :hover {
      background-color: ${(props) => props.theme.colors.buttonColor};
    }
  }
`;
