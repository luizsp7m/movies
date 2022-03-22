import styled from "styled-components";

export const Container = styled.div`
  padding: 3.2rem 3.2rem 3.2rem 11.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media(max-width: 475px) {
    padding: 3.2rem 3.2rem 11.2rem 3.2rem;
  }
`;