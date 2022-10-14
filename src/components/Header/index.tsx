import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.Nav>
        <S.NavSection>
          <S.NavItem>
            <S.NavLink end to="/">
              <S.IconTasks size={24} />
              Tarefas
            </S.NavLink>
          </S.NavItem>
        </S.NavSection>
      </S.Nav>
    </S.Container>
  );
}
