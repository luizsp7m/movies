import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.35rem;
  }

  body, input, button {
    font-family: "Poppins", sans-serif;
  }

  #__next {

  }

  .slick-list {
    margin: 0 -0.8rem;
  }

  .slick-slide >div {
    padding: 0 0.8rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #10141F;
  }

  ::-webkit-scrollbar-thumb {
    background: #161D2F;
  }

  @media(max-width: 475px) {
    html {
      font-size: 50%;
    }
  }
`;