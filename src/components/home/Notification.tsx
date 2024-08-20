import styled from "styled-components";
import CategoryButton from "./CategoryButton";

const Notification = () => {
  return (
    <Container>
      <Header>
        <Title></Title>
        <CloseButton></CloseButton>
      </Header>
      <ContentWrapper></ContentWrapper>
      <InfoWrapper>
        <Time></Time>
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
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.div``;

const CloseButton = styled.div``;

const ContentWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
`;

const Time = styled.div``;

const CategoryWrapper = styled.div``;
