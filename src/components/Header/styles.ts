import styled from "styled-components";

import { NavLink as RouterNavLink } from "react-router-dom";

import { Clipboard as IconTaskPhosphor } from "phosphor-react";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.headerColor};
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

export const NavSection = styled.ul`
  display: flex;
  column-gap: 2rem;
  align-items: center;
`;

export const NavLink = styled(RouterNavLink)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  height: 5rem;
  border-bottom: 2px solid transparent;
  padding: 0 1.5rem;
  color: ${(props) => props.theme.colors["gray-300"]};
  font-size: 1.15rem;

  &.active {
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
  }
`;

export const NavItem = styled.li``;

export const IconTasks = styled(IconTaskPhosphor)`
  color: #c4c4cc;
`;
