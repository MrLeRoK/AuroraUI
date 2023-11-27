import {
  ThemeProvider as StyledThemeProvider
} from "styled-components";
import { useTheme } from "./themes/ThemeProvider.jsx";
import { GlobalStyles } from "./GlobalStyles";
import { components } from "./themes/theme.js";
import { Box } from "./components/Box/Box.jsx"


const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeProvider theme={components[theme]}>
      <GlobalStyles />
      <Box width={500} height={1000}>
        <h1>Hello</h1>
      </Box>
      
    </StyledThemeProvider>
  );
};

export { Home };
