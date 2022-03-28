import Head from "next/head";

import { Container } from "./styles";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { ToastContainer } from "react-toastify";

interface Props {
  title: string;
  children: ReactNode;
}

export function Layout({ children, title }: Props) {
  return (
    <Container>
      <Head>
        <title>Mediafy - {title}</title>
      </Head>

      <Header />

      <ToastContainer />

      <Main>
        {children}
      </Main>

      <Footer />
    </Container>
  );
}