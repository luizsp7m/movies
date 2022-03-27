import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  min-height: 50vh;

  & + & {
    margin-top: 3.2rem;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  span {
    font-size: 1.4rem;
    color: ${props => props.theme.TEXT_SECONDARY};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.2rem;
`;