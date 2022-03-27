import styled from "styled-components";

interface NavItemProps {
  selected: boolean;
}

interface NavProps {
  toggled: boolean;
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

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  gap: 3.6rem;

  position: absolute;
  left: 0;
  right: 0;
  justify-content: center;

  @media(max-width: 768px) {
    background: ${props => props.theme.BACKGROUND_COLOR};
    width: 100%;
    left: unset;
    right: 0;
    top: 8.1rem;
    height: calc(100vh - 8.1rem);
    border-left: 1px solid ${props => props.theme.SIDEBAR_COLOR};

    flex-direction: column;
    gap: 6.4rem;

    transform: ${props => props.toggled ? `translateX(0%)` : `translateX(100%)`};
    transition: transform 0.3s ease-in-out;
  }
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

  @media(max-width: 768px) {
    position: absolute;
    right: 10rem;
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

  @media(max-width: 768px) {
    position: absolute;
    right: 10rem;
  }
`;

export const Burger = styled.div`
  display: none;

  @media(max-width: 768px) {
    display: block;

    div {
    height: 3px;
    width: 25px;
    background: #f0f0f5;
    margin: 4px 0;
  }

    cursor: pointer;
  }
`;