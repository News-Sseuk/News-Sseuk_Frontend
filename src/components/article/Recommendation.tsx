import styled from "styled-components";
import ArticleCard from "../ArticleCard";

const Recommendation = () => {
  return (
    <Container>
      <Title>00님을 위한 추천</Title>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Container>
  );
};

export default Recommendation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid black;
  padding: 16px 0px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 10px;
  padding: 0px 10px;
`;
