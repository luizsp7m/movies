import Link from "next/link";

import { Container, Wrapper, Logo, Nav, NavItem, User, SignInButton, Burger } from "./styles";
import { FaBookmark, FaHotjar, FaMicrosoft } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { RiClapperboardFill } from "react-icons/ri";
import { BsCollectionPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

export function Header() {
  const { asPath } = useRouter();

  const { signInWithGoogle, logout, user } = useAuth();

  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link href="/" passHref>
            <a>
              <RiClapperboardFill />
            </a>
          </Link>
        </Logo>

        <Nav toggled={toggle}>
          <Link href="/" passHref>
            <NavItem selected={asPath === "/" && true}>
              <FaMicrosoft />
              <span>Início</span>
            </NavItem>
          </Link>

          <Link href="/movies" passHref>
            <NavItem selected={asPath.includes("movies") && true}>
              <MdLocalMovies />
              <span>Filmes</span>
            </NavItem>
          </Link>

          <Link href="/series" passHref>
            <NavItem selected={asPath.includes("series") && true}>
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

        <Burger onClick={() => setToggle(!toggle)}>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
      </Wrapper>
    </Container>
  );
}