import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: flex-start;
`;

export const PosterImage = styled.div`
  img {
    width: 25rem;
    height: auto;
    object-fit: cover;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  h1 {
    font-size: 2.8rem;
  }

  div.row {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    div.sub-row {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      time {
        font-size: 1.45rem;
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.45rem;
      }
    }

    div.genres {
      display: flex;
      gap: 1.6rem;

      span {
        font-size: 1.6rem;
        border-radius: 0.25rem;
        padding: 0.6rem 1.40rem;
        background: ${props => props.theme.SIDEBAR_COLOR};
      }
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }

  button {
    padding: 1.6rem;
    border: 0;
    outline: 0;
    border-radius: 0.25rem;
    font-size: 1.45rem;
    transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.LOGO_COLOR};
      color: ${props => props.theme.TEXT_PRIMARY};
    }
  }
`;