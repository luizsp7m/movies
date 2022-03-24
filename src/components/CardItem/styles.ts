import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CardImage = styled.div`
  a {
    img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
      border-radius: 1rem;
      transition: opacity 0.25s ease-in-out;
      cursor: pointer;
    }

    &:hover {
      img {
        opacity: 0.5;
      }
    }
  }
`;

export const CardInformation = styled.div`
  div {
    display: flex;
    gap: 1.6rem;

    span {
      font-size: 1.35rem;
      color: ${props => props.theme.TEXT_SECONDARY};
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.8rem;
      }
    }
  }

  h5 {
    margin-top: 0.35rem;
    font-size: 1.45rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 3.2rem;
  width: 3.2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 0;
  outline: 0;
  font-size: 0;
  transition: background 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.LOGO_COLOR};
  }

  svg {
    font-size: 1.6rem;
    color: ${props => props.theme.TEXT_PRIMARY};
  }
`;