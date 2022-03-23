import styled from "styled-components";

interface ContainerProps {
  isCurrent: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 0;
  outline: 0;
  background: ${props => props.isCurrent ? props.theme.LOGO_COLOR : props.theme.SIDEBAR_COLOR};
  color: ${props => props.theme.TEXT_PRIMARY};
  cursor: pointer;
`;