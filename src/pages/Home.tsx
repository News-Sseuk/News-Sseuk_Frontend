import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import ArticleCard from "../components/ArticleCard";
import notification from "../assets/notifications.png";
import CategoryButton from "../components/home/CategoryButton";

const Home = () => {
  const dummyCategory = ["UX/UI", "국내법", "영화", "일본드라마"];

  return (
    <Div>
      <Header>
        <Title>
          <Text>6월 18일, 오늘의 뉴쓱</Text>
          <Icon
            onClick={() => {
              console.log("alarm clicked");
            }}
          />
        </Title>
        <CategoryList>
          {dummyCategory.map((category) => (
            <CategoryButton
              key={dummyCategory.indexOf(category)}
              category={category}
            />
          ))}
        </CategoryList>
      </Header>
      <Contents>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Contents>
      <NavigationBarWrapper>
        <NavigationBar />
      </NavigationBarWrapper>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: #003d62;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-start;
  font-weight: 600;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${notification});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 8rem;
  cursor: pointer;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  width: 80vw;
  height: 6vh;
  margin-top: 10px;
`;

const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100vw;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 4rem;
`;

const NavigationBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 90vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
