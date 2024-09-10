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
        <Title>
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
`;

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
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
