import Head from "next/head";

import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import { Main } from "../Main";

import { Container } from "./styles";

interface Props {
  title: string;
  children: ReactNode;
}

export function Layout({ children, title }: Props) {
  return (
    <Container>
      <Head>
        <title>Movies - {title}</title>
      </Head>

      <Sidebar />

      <Main>
        {children}
      </Main>
    </Container>
  );
}