import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import HashtagButton from "../components/HashtagButton";
import arrow_back from "../assets/arrow_back.png";
import Content from "../components/article/Content";

const Article = () => {
  const nav = useNavigate();
  const { id } = useParams();
  return (
    <Div>
      <Header>
        <BackButton
          onClick={() => {
            nav(-1);
          }}
        >
          <Img src={arrow_back} />
        </BackButton>
        <TagContainer>
          <HashtagButton category={"정치"} />
          <HashtagButton category={"헌법재판소"} />
          <HashtagButton category={"유산"} />
          <HashtagButton category={"가족제도"} />
        </TagContainer>
      </Header>
      <Content />
      <NavigationBarWrapper>
        <NavigationBar />
      </NavigationBarWrapper>
    </Div>
  );
};

export default Article;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: white;
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
  margin-top: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  align-items: center;
`;

const BackButton = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const Img = styled.img``;
