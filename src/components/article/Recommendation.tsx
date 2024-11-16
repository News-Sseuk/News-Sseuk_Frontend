import styled from "styled-components";
import ArticleList from "../home/ArticleList";
import { useEffect } from "react";
import { fetchContentRecommend } from "../../api/user-controller";

interface Props {
  id: string;
}

// 개별 기사 페이지 추천 -> 3개
const Recommendation = (props: Props) => {
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData api 실행");
      try {
        if (id) {
          const data = await fetchContentRecommend(props.id);
          console.log(data);

          if (data) {
            console.log(data);
          }
        }
      } catch {
        console.log("내용 기반 추천 기사 fetching 오류 발생");
      }
    };
    fetchData();
  }, [props.id]);
  return (
    <Container>
      <Title>관련 기사도 확인해보세요</Title>
      <ArticleList />
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
