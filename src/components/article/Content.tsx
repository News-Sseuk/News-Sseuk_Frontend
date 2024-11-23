import styled from "styled-components";
import tmp from "../../assets/category/culture.png";
import Summary from "./Summary";
import Recommendation from "./Recommendation";
import Accuracy from "../common/Accuracy";

type ArticleType = {
  title?: string;
  press?: string;
  category?: string;
  content?: string;
  hashTagList?: string[];
  image?: string[];
  journalist?: string;
  summary?: string;
  reliability?: number;
  publishedDate?: string;
  id: string;
};

interface Props {
  data: ArticleType;
}

const Content = (props: Props) => {
  return (
    <Container>
      <Title>{props.data?.title} </Title>
      <InfoContainer>
        <Text>{props.data?.publishedDate}</Text>
        <Text>{props.data?.press}</Text>
        <Text>{props.data?.journalist}</Text>
        {props.data.reliability ? (
          <Accuracy accuracy={props.data?.reliability}></Accuracy>
        ) : null}
      </InfoContainer>
      {props.data?.image?.length !== undefined ? (
        <Img src={props.data?.image[0]} />
      ) : (
        <Img src={tmp} />
      )}
      <StyledContent>{props.data?.content}</StyledContent>
      <Summary articleId={props.data?.id} content={props.data?.summary ?? ""} />
      <Recommendation id={props.data?.id} />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  justify-content: flex-start;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin: 10px 0;
  width: 100%;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 8px;
`;

const StyledContent = styled.div`
  font-weight: 400;
  line-height: 21px;
  font-size: 14px;
  margin-bottom: 15px;
  white-space: pre-line;
`;

const Img = styled.img`
  width: 100%;
  height: 30%;
  margin: 20px 0;
`;
