import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export function Main({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}