import * as React from "react";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, ThemeType } from "./styles/global";
import * as themeLight from "./styles/theme.json";
import * as themeDark from "./styles/theme-dark.json";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryBackground.value};
  height: 100vh;
  width: 100vw;
`;

const StyledButton = styled.div`
  background-color: ${({ theme }) => theme.color.primaryBackground.value};
  border-radius: ${({ theme }) => theme.radii.round.value.topLeft}px;
  border: ${({ theme }) => theme.borders.full.value.weight}px solid
    ${({ theme }) => theme.color.accent.value};
  color: ${({ theme }) => theme.color.accent.value};
  padding: ${({ theme }) => theme.sizes.xs.value}px;
  cursor: pointer;
`;

const App: React.FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeType>(themeLight);

  const changeTheme = () => {
    if (theme === themeLight) {
      setTheme(themeDark);
      console.log("theme Dark");
    } else {
      setTheme(themeLight);
      console.log("theme Light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <StyledButton onClick={() => changeTheme()}>change theme!</StyledButton>
      </StyledApp>
    </ThemeProvider>
  );
};

export { App };
