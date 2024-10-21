import styled from "styled-components";
import share from "../../assets/share.svg";
import scrap from "../../assets/scrap.svg";
import report from "../../assets/report.svg";

const Summary = () => {
  return (
    <Container>
      <Title>요약</Title>
      <Content>
        헌법재판소가 가족 제도와 사회 변화에 맞는 입법, 상속인의 재산권 침해
        등을 이유로 유류분 제도를 헌법 위배로 결정했습니다.
      </Content>
      <IconContainer>
        <Icon src={share} />
        <Icon src={scrap} />
        <Icon src={report} />
      </IconContainer>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid black;
  padding: 16px 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  padding: 10px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 50px;
`;

const Icon = styled.img`
  width: 30px;
  height: 27px;
  color: ${({ theme }) => theme.colors.main};
`;
