import styled from "styled-components";
import HashtagButton from "./HashtagButton";
import { useNavigate } from "react-router-dom";

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

interface articleType {
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  category: string;
  hashTagList: string[];
  reliability: number;
}

const dummyArticle: articleType = {
  id: "1",
  title: "dummy title",
  description: "article description",
  publishedDate: "2024-10-22",
  category: "category",
  hashTagList: ["dummy1", "hashtag1", "yeah"],
  reliability: 33,
};
const ArticleCard = () => {
  const nav = useNavigate();

  return (
    <Container>
      <HashtagList>
        <HashtagButton isCategory={true} category={dummyArticle.category} />
        {dummyArticle.hashTagList.map((category, idx) => (
          <HashtagButton key={idx} category={category} />
        ))}
      </HashtagList>
      <Article>
        <Title onClick={() => nav("/article")}>{dummyArticle.title} </Title>
        <Content>{dummyArticle.description}</Content>
      </Article>
      <InfoWrapper>
        <Date> {dummyArticle.publishedDate}</Date>
        <Accuracy>{dummyArticle.reliability}%</Accuracy>
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
