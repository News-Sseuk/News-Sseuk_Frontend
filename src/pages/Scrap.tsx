import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";

const Scrap = () => {
  return (
    <>
      <Div>
        <Header>
          <CategoryWrapper>
            <Img>이미지</Img>
            <CategoryName>정치</CategoryName>
          </CategoryWrapper>
        </Header>
        <ContentWrapper>
          <Title>내 스크랩</Title>
          <ArticleContainer>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ArticleContainer>
        </ContentWrapper>
        <NavigationBarWrapper>
          <NavigationBar />
        </NavigationBarWrapper>
      </Div>
    </>
  );
};

export default Scrap;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
`;

const NavigationBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-bottom: 1rem;
  margin-top: 3rem;
`;

const Header = styled.div``;

const ContentWrapper = styled.div`
  flex: 1 1 auto; /* Fill remaining space */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 1rem;
  padding-bottom: 3rem;
`;

const Title = styled.div`
  color: #003d62;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.div``;

const CategoryName = styled.div``;
