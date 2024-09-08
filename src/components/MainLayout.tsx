// import { useLocation } from "react-router-dom";
// import styled from "styled-components";

// const LayoutContainer = styled.div`
//   max-width: 425px;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   background-color: white;
// `;

// const Content = styled.div`
//   flex: 1;
//   overflow: auto;
//   display: flex;
//   flex-direction: column;
// `;

// function MainLayout({ children }) {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/";

//   return (
//     <LayoutContainer>
//       <Content>{children}</Content>
//       {!isLoginPage && <MainNavigationBar />}
//     </LayoutContainer>
//   );
// }

// export default MainLayout;
