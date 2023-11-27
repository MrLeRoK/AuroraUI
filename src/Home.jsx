import styled, {
  ThemeProvider as StyledThemeProvider,
  css
} from "styled-components";
import { useTheme } from "./themes/ThemeProvider.jsx";
import { GlobalStyles } from "./GlobalStyles";
import { components } from "./themes/theme.js";



const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeProvider theme={components[theme]}>
      <GlobalStyles />
    </StyledThemeProvider>
  );
};

export { Home };
