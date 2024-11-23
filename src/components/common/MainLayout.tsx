import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isOnboardingPage = location.pathname === "/onboarding";
  const isLoadingPage = location.pathname === "/test";

  return (
    <LayoutContainer id="layout">
      <Content>{children}</Content>
      {!isLoginPage && !isOnboardingPage && !isLoadingPage && <NavigationBar />}
    </LayoutContainer>
  );
};

export default MainLayout;

const LayoutContainer = styled.div`
  background-color: #fcfafa;
  min-width: 300px;
  max-width: 820px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0 auto;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
