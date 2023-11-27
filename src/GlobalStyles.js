import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    padding: 0;
    margin: 0;

    font-family: "Golos Text", sans-serif;
  }
`;
