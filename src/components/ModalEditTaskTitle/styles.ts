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

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors["gray-700"]};
  border-radius: 8px;
  box-shadow: 4px 10px 24px 0px rgba(0, 0, 0, 0.75);
  width: 50rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  padding: 1rem;

  @media (max-width: 680px) {
    width: 30rem;
  }
`;

export const InputForm = styled.form`
  display: flex;
  align-items: center;
  width: 40rem;
  justify-content: center;
  column-gap: 0.5rem;
  row-gap: 2rem;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const InputNewTitle = styled.input`
  padding-left: 0.5rem;
  width: 80%;
  height: 2.5rem;
  border-radius: 8px;
  outline-color: ${(props) => props.theme.colors.primaryColor};
  border: 0;
  font-size: 1rem;

  @media (max-width: 680px) {
    width: 60%;
  }
`;

export const CloseModalIcon = styled(CloseModalIconPhosphor)`
  color: ${(props) => props.theme.colors.white};
  z-index: 2000;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const ButtonSaveNewTitle = styled.button`
  background-color: ${(props) => props.theme.colors.buttonColor};
  color: ${(props) => props.theme.colors.white};
  border: 0;
  height: 3rem;
  width: 8rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
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
