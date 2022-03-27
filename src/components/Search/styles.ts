import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  button {
    font-size: 0;
    border: 0;
    height: 4.4rem;
    width: 4.4rem;
    background: 0;
    border-radius: 0.25rem;
    cursor: pointer;

    svg {
      font-size: 2.2rem;
      color: ${props => props.theme.TEXT_PRIMARY};
    }
  }

  input {
    height: 4.4rem;
    padding: 0 1.2rem;
    flex: 1;
    outline: 0;
    border: 0;
    background: 0;
    font-size: 1.55rem;
    color: ${props => props.theme.TEXT_SECONDARY};

    &::placeholder {
      color: ${props => props.theme.TEXT_SECONDARY};
      font-size: 1.55rem;
    }
  }
`;