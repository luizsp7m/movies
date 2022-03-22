import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CardImage = styled.div`
  position: relative;

  &:hover {
    img {
      opacity: 0.50;
    }
  }

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 1rem;
    transition: opacity 0.25s ease-in-out;
    cursor: pointer;
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: rgba(0, 0, 0, 0.5);
    outline: 0;
    font-size: 0;
    border: 0;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    cursor: pointer;

    svg {
      font-size: 1.6rem;
      color: ${props => props.theme.TEXT_PRIMARY};
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
