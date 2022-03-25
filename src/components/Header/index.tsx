import Link from "next/link";

import { Container, Wrapper, Logo, Nav, NavItem, User, SignInButton } from "./styles";
import { FaBookmark, FaHotjar, FaMicrosoft } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";

export function Header() {
  const { asPath } = useRouter();

  const { signInWithGoogle, logout, user } = useAuth();

  return (
    <Container>
      <Wrapper>
        <Logo>
          <FaHotjar />
        </Logo>

        <Nav>
          <Link href="/" passHref>
            <NavItem selected={asPath === "/" && true}>
              <FaMicrosoft />
              <span>Início</span>
            </NavItem>
          </Link>

          <Link href="/movies" passHref>
            <NavItem selected={asPath === "/movies" && true}>
              <MdLocalMovies />
              <span>Filmes</span>
            </NavItem>
          </Link>

          <Link href="/series" passHref>
            <NavItem selected={asPath === "/series" && true}>
              <BsCollectionPlayFill />
              <span>Séries</span>
            </NavItem>
          </Link>

          <Link href="/favorites" passHref>
            <NavItem selected={asPath === "/favorites" && true}>
              <FaBookmark />
              <span>Favoritos</span>
            </NavItem>
          </Link>
        </Nav>

        {!user ? (
          <SignInButton onClick={signInWithGoogle}>
            <img src="/assets/google.png" alt="Google" />
            <span>Entrar com Google</span>
          </SignInButton>
        ) : (
          <User>
            <span onClick={logout}>Sair</span>
            <img src={user.avatar} alt={user.name} />
          </User>
        )}
      </Wrapper>
    </Container>
  );
}