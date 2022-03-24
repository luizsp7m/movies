import Link from "next/link";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <span>
        Desenvolvido por <Link href="https://github.com/luizsp7m">
          <a target="blank">Luiz Oliveira</a>
        </Link>
      </span>
    </Container>
  );
}