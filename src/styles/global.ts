import { createGlobalStyle } from "styled-components";

import {} from "styled-components";

import * as themeTokens from "../styles/theme.json";

export type ThemeType = typeof themeTokens;

export const GlobalStyles: any = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: monospace;
  overflow-x: hidden;
  background-color: pink
}

`;
