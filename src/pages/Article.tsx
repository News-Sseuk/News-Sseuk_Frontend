import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HashtagButton from "../components/HashtagButton";
import arrow_back from "../assets/arrow_back.png";
import Content from "../components/article/Content";

const Article = () => {
  const nav = useNavigate();
  const category = "정치";
  const dummyList = ["헌법재판소", "유산", "가족제도"];
  // const { id } = useParams();
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
          <HashtagButton isCategory={true} category={category}></HashtagButton>
          {dummyList.map((category, idx) => (
            <HashtagButton key={idx} category={category} />
          ))}
        </TagContainer>
      </Header>
      <Content />
    </Div>
  );
};

export default Article;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
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
