import styled from "styled-components";
import tmp from "../../assets/category/정치.png";

const Content = () => {
  return (
    <Container>
      <Title>
        헌재 가족의 모습 달라졌다... 국민 눈높이 새 입법 국회에 맡겨
      </Title>
      <InfoContainer>
        <Text>2024.05.02 18:00</Text>
        <Text>경향신문</Text>
        <Text>유선희 기자</Text>
        <Text>90%</Text>
      </InfoContainer>
      <Img src={tmp} />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  padding: 10px 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 20px;
  justify-content: flex-start;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 8px;
`;

const Img = styled.img`
  width: 90%;
  height: 30%;
  margin: 20px;
`;
