import styled from "styled-components";

interface ButtonProps {
  direction: "left" | "right";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-bottom: 1.6rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 400;
  }
`;

export const Button = styled.div<ButtonProps>`
  height: 4rem;
  width: 4rem;
  background: ${props => props.theme.TEXT_TERTIARY};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.15rem;

  display: none;

  position: absolute;
  top: 50%;
  z-index: 5;
  left: ${props => props.direction === "left" && "-20px"};
  right: ${props => props.direction === "right" && "-20px"};
  transition: background 0.25s ease-in-out;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.LOGO_COLOR};
  }

  svg {
    font-size: 1.8rem;
  }
`;