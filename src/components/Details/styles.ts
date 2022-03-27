import styled from "styled-components";

interface BackgroundImageProps {
  image: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    align-self: flex-start;
    margin-bottom: 3.2rem;
    background: ${props => props.theme.BACKGROUND_COLOR};;
    color: ${props => props.theme.TEXT_PRIMARY};
    border: 0;
    outline: 0;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
    cursor: pointer;
  }
`;

export const BackgroundImage = styled.div<BackgroundImageProps>`
  background: ${props => `url(${props.image})`};
  height: 30rem;
  width: 100%;
  background-position: center 20%;
  background-size: cover;
  border-radius: 0.50rem;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding: 3.2rem;
  background: ${props => props.theme.SIDEBAR_COLOR};
  width: 95%;
  max-width: 768px;
  position: relative;
  top: -5rem;
  margin-bottom: -5rem;
  border-radius: 0.50rem;

  div.header {
    time {
      font-size: 1.45rem;
      color: ${props => props.theme.TEXT_SECONDARY};;
    }

    h1 {
      font-size: 1.85rem;
      margin: 0.8rem 0;
    }

    div.genres {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      flex-wrap: wrap;

      span {
        font-size: 1.45rem;
        color: ${props => props.theme.TEXT_SECONDARY};;
      }
    }
  }

  div.body {
    font-size: 1.55rem;
    line-height: 3.2rem;
  }

  div.footer {
    button {
      background: #FAC305;
      color: ${props => props.theme.SIDEBAR_COLOR};
      padding: 1rem 2rem;
      border: 0;
      outline: 0;
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
      cursor: pointer;

      svg {
        font-size: 1.35rem;
      }

      &:hover {
        background: ${props => props.theme.TEXT_PRIMARY};
      }
    }
  }
`;