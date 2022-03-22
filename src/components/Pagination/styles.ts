import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    outline: 0;
    background: ${props => props.theme.SIDEBAR_COLOR};
    color: ${props => props.theme.TEXT_PRIMARY};
    cursor: pointer;
  }

  button.selected {
    background: ${props => props.theme.LOGO_COLOR};
  }
`;