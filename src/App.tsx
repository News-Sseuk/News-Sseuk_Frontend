
import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
