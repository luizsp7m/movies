import styled from "styled-components";

export const Container = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.SIDEBAR_COLOR};
  
  span {
    font-size: 1.45rem;
    color: ${props => props.theme.TEXT_PRIMARY};

    a {
      text-decoration: none;
      color: ${props => props.theme.TEXT_PRIMARY};
      text-decoration: underline;
    }
  }
`;