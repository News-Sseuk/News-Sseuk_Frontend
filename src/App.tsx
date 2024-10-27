import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./styles/theme";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
