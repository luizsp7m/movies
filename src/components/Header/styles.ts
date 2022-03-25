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

  position: relative;
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

  position: absolute;
  left: 0;
  right: 0;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  z-index: 5;

  span {
    font-size: 1.35rem;
    transition: color 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.TEXT_SECONDARY};
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  background: ${props => props.theme.TEXT_PRIMARY};
  cursor: pointer;
  z-index: 5;

  img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }

  span {
    font-size: 1.35rem;
    color: ${props => props.theme.BACKGROUND_COLOR};
  }
`;
