import styled from "styled-components";

interface NavItemProps {
  selected: boolean;
}

export const Container = styled.div`
  position: fixed;
  width: 8rem;
  height: 100vh;
  background: ${props => props.theme.SIDEBAR_COLOR};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0;

  z-index: 10;

  @media(max-width: 475px) {
    height: 8rem;
    width: 100%;
    bottom: 0;

    padding: 0 3.2rem;

    flex-direction: row;
  }
`;

export const Logo = styled.div`
  margin-bottom: 3.2rem;

  svg {
    color: ${props => props.theme.LOGO_COLOR};
    font-size: 2.8rem;
  }

  @media(max-width: 475px) {
    margin-bottom: 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  
  @media(max-width: 475px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const NavItem = styled.a<NavItemProps>`
  svg {
    color: ${({ selected, theme }) => selected ? theme.TEXT_PRIMARY : theme.TEXT_TERTIARY};
    font-size: 2.2rem;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: ${props => props.theme.TEXT_PRIMARY};
    }
  }
`;

export const UserImage = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f5;

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  @media(max-width: 475px) {
    width: 4.5rem;
    height: 4.5rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;
