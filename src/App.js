import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Home from "./pages/Home";

const theme = {
  white: "#fff",
  black: "#444",
  maxWidth: 1000,
  breakpoint: 800
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
  }
`;

const AppWrapper = styled.div`
  color: ${props => props.theme.black};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AppWrapper>
          <Home />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default App;
