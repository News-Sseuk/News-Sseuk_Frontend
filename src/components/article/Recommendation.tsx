import styled from "styled-components";
import ArticleList from "../home/ArticleList";
import { useEffect, useState } from "react";
import { fetchContentRecommend } from "../../api/user-controller";
import Spinner from "../../assets/spinner.gif";

interface Props {
  id: string;
}

const Recommendation = (props: Props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.id) {
          const data = await fetchContentRecommend(props.id);
          if (data) {
            setArticles(data);
          }
        }
      } catch {
        throw new Error("내용 기반 기사 추천 fetching 오류");
      }
    };
    fetchData();
  }, [props.id]);
  return (
    <Container>
      <Title>관련 기사도 확인해보세요</Title>
      {articles.length > 0 ? (
        <ArticleList articleArray={articles} />
      ) : (
        <SpinnerWrppaer>
          <img src={Spinner} width="30px" />
        </SpinnerWrppaer>
      )}
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

const SpinnerWrppaer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
