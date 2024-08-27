import styled from "styled-components";
import CategoryButton from "./CategoryButton";
// interface NotificationProps {
//     objectList: {
//       title: string;
//       content: string;
//       date: string;
//       tagList: string[];
//     }[];
//   }

const Notification = () => {
  return (
    <Container>
      <Header>
        <Title>5월 7일, 서윤 님을 위한 오늘의 뉴-쓱</Title>
        <CloseButton>&times;</CloseButton>
      </Header>
      <ContentWrapper>
        현재 가족의 모습 달라졋다... 국민 눈높이 새 입법 국회에 맡겨
      </ContentWrapper>
      <InfoWrapper>
        <Time>2024.04.25 19:18</Time>
        <CategoryWrapper>
          <CategoryButton category={"국내법"} />
        </CategoryWrapper>
      </InfoWrapper>
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin: 5px 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const Time = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin-right: auto;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 10px;
`;
