import styled from "styled-components";
import HashtagButton from "./HashtagButton";

const ArticleCard = () => {
  return (
    <Container>
      <HashtagList>
        <HashtagButton category={"test"} />
        <HashtagButton category={"test"} />
        <HashtagButton category={"test"} />
        <HashtagButton category={"test"} />
      </HashtagList>
      <Article>
        <Title></Title>
        <Content></Content>
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
  width: 90vw;
  height: 20vh;
  border-bottom: 1px solid black;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

const HashtagList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Content = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Date = styled.div``;

const Accuracy = styled.div``;
