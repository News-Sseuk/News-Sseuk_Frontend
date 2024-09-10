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

  return (
    <LayoutContainer>
      <Content>{children}</Content>
      {!isLoginPage && <NavigationBar />}
    </LayoutContainer>
  );
};

export default MainLayout;

const LayoutContainer = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: white;
  padding: 10px 20px;
`;
                                                                                          
const Content = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
