import styled from "styled-components";
import HashtagButton from "./HashtagButton";
import { useNavigate } from "react-router-dom";
import type { ArticleType } from "../home/ArticleList";

const ArticleCard = ({ data }: { data: ArticleType }) => {
  const nav = useNavigate();
  const dummy = ["dummy1", "hashtag", "hashtag"];

  return (
    <Container>
      {data.issue ? (
        <IssueContainer>
          <IssueWrppaer>{data.issue}</IssueWrppaer>
        </IssueContainer>
      ) : (
        <></>
      )}

      <HashtagList>
        <HashtagButton isCategory={true} category={data?.category} />
        {data?.hashTagList?.length !== 0
          ? data?.hashTagList?.map((category, idx) => (
              <HashtagButton key={idx} category={category} />
            ))
          : dummy.map((category, idx) => (
              <HashtagButton key={idx} category={category} />
            ))}
      </HashtagList>
      <Article>
        <Title onClick={() => nav(`/article/${data.id}`)}>{data?.title} </Title>
        <Content>{data?.description}...</Content>
      </Article>
      <InfoWrapper>
        <Date> {data?.publishedDate}</Date>
        <Accuracy>{data?.reliability ?? "90"}%</Accuracy>
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

const IssueContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const IssueWrppaer = styled.div`
  background-color: #adb5bd;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  padding: 10px 20px;
`;
