import styled from "styled-components";

interface NavItemProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.BACKGROUND_COLOR};
  border-bottom: 1px solid ${props => props.theme.SIDEBAR_COLOR};
  position: fixed;
  z-index: 10;
`;

export const Wrapper = styled.div`
  height: 8rem;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  svg {
    color: ${props => props.theme.LOGO_COLOR};
    font-size: 2.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.6rem;
`;

export const NavItem = styled.a<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: ${({ selected, theme }) => selected ? theme.TEXT_PRIMARY : theme.TEXT_TERTIARY};
  text-decoration: none;
  transition: color 0.25s ease-in-out;

  svg {
    font-size: 1.8rem;
  }

  span {
    font-size: 1.45rem;
  }

  &:hover {
    color: ${props => props.theme.TEXT_PRIMARY};
  }

  @media(max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const User = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  background: ${props => props.theme.TEXT_PRIMARY};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
