import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./styles/theme";
import { RecoilRoot } from "recoil";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <RecoilRoot>
      <CategoryProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </CategoryProvider>
    </RecoilRoot>
  );
}

export default App;
