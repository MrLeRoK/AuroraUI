import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./Home.jsx";
import { ThemeProvider } from "./themes/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>,
);
