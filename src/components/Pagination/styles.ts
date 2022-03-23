import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  span {
    font-size: 1.45rem;
    font-weight: 700;
  }
`;

export const Disclaimer = styled.span`
  font-size: 1.45rem;
  color: ${props => props.theme.TEXT_TERTIARY};
`;