import styled from "styled-components";
import HashtagButton from "./HashtagButton";
import { useNavigate } from "react-router-dom";

//개별 기사 페이지 추천 기사 - 3개

/** 
articleThumbnailDTOs": [
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "publishedDate": "2024-10-13T10:03:51.228Z",
    "category": "string",
    "hashTagList": [
      "string"
    ],
    "reliability": 0
  }
]
*/
const ArticleCard = () => {
  const nav = useNavigate();
  const category = "정치";
  const dummyList = ["헌법재판소", "유산", "가족제도"];

  return (
    <Container>
      <HashtagList>
        <HashtagButton isCategory={true} category={category} />
        {dummyList.map((category, idx) => (
          <HashtagButton key={idx} category={category} />
        ))}
      </HashtagList>
      <Article>
        <Title onClick={() => nav("/article")}>
          인공지능과 블록체인 기술을 활용한 국내법의 혁신과 발전에 대한 전망
        </Title>
        <Content>
          국내법은 인공지능과 블록체인 기술을 활용하여 혁신하고 발전할 것으로
          예상됩니다. 이러한 기술의 적극적인 도입은 법률 분야에서 효율성을
          향상시키...
        </Content>
      </Article>
      <InfoWrapper>
        <Date>2024.05.02 18:00</Date>
        <Accuracy>98%</Accuracy>
      </InfoWrapper>
    </Container>
  );
};

export default ArticleCard;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const HashtagList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const Content = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const Date = styled.div`
  margin-right: 1rem;
  font-size: 0.7rem;
  left: 0;
`;

const Accuracy = styled.div`
  background-color: #cde499;
  padding: 0.2rem 0.5rem;
  font-size: 0.5rem;
  border-radius: 0.4rem;
  color: #003d62;
`;
