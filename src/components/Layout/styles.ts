import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.BACKGROUND_COLOR};
  color: ${props => props.theme.TEXT_PRIMARY};
`;