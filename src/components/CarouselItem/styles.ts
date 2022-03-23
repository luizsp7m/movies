import styled from "styled-components";

export const PosterImage = styled.div`
  img {
    width: 100%;
    height: 35rem;
    object-fit: cover;
    transition: opacity 0.25s ease-in-out;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 1.6rem; */
  position: relative;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    ${PosterImage} {
      img {
        opacity: 0.65;
      }
    }
  }
`;

export const Summary = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3.6rem 1.6rem 1.6rem 1.6rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), ${props => props.theme.SIDEBAR_COLOR});

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
