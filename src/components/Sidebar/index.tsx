import Link from "next/link";

import { Container, Logo, Nav, NavItem, UserImage } from "./styles";

import { FaHotjar, FaMicrosoft, FaBookmark } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";

import { useRouter } from "next/router";

export function Sidebar() {
  const { asPath } = useRouter();

  return (
    <Container>
      <Logo>
        <FaHotjar />
      </Logo>

      <Nav>
        <Link href="/" passHref>
          <NavItem selected={asPath === "/" && true}>
            <FaMicrosoft />
          </NavItem>
        </Link>

        <Link href="/movies" passHref>
          <NavItem selected={asPath === "/movies" && true}>
            <MdLocalMovies />
          </NavItem>
        </Link>

        <Link href="/series" passHref>
          <NavItem selected={asPath === "/series" && true}>
            <BsCollectionPlayFill />
          </NavItem>
        </Link>

        <Link href="/favorites" passHref>
          <NavItem selected={asPath === "/favorites" && true}>
            <FaBookmark />
          </NavItem>
        </Link>
      </Nav>

      <UserImage>
        <img src="https://images.wallpaperscraft.com/image/single/mountains_rocks_relief_267333_1280x720.jpg" alt="User" />
      </UserImage>
    </Container>
  );
}