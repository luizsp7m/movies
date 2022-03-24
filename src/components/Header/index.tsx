import Link from "next/link";

import { Container, Wrapper, Logo, Nav, NavItem, User } from "./styles";
import { FaBookmark, FaHotjar, FaMicrosoft } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

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

        <User>
          <img src="https://i.pinimg.com/originals/57/cf/b0/57cfb06bcd89e4a17b55e84b41719862.gif" alt="User" />
        </User>
      </Wrapper>
    </Container>
  );
}