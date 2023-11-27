import {
  ThemeProvider as StyledThemeProvider
} from "styled-components";
import { useTheme } from "./themes/ThemeProvider.jsx";
import { GlobalStyles } from "./GlobalStyles";
import { components } from "./themes/theme.js";



const Home = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={components[theme]}>
      <GlobalStyles />
    </StyledThemeProvider>
  );
};

export { Home };
