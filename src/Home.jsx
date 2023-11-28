import React, { useEffect } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "./themes/ThemeProvider.jsx";
import { GlobalStyles } from "./GlobalStyles";
import { components } from "./themes/theme.js";
import { Box } from "./components/Box/Box.jsx";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeProvider theme={components[theme]}>
      <GlobalStyles />
      <Box
        width={500}
        height={500}
        style={{ marginLeft: "150px", marginTop: "150px"}}
        className="box-class" // для дополнительный стилизации
        boxshadow="shadow1"
      >
        <h1>sadas</h1>
      </Box>
    </StyledThemeProvider>
  );
};

export { Home };
