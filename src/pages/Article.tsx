import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HashtagButton from "../components/common/HashtagButton";
import arrow_back from "../assets/arrow_back.png";
import Content from "../components/article/Content";
import { useEffect, useState } from "react";
import { fetchArticle, postUserHistory } from "../api/user-controller"; // postUserHistory 가져오기
import type { ArticleType } from "../components/home/ArticleList";

const Article = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleType>();

  // 더미 데이터 (예: 카테고리)
  const dummyList = ["헌법재판소", "유산", "가족제도"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await fetchArticle(id);
          if (data) {
            setArticle(data);

            // 사용자의 읽은 기사를 history에 추가
            try {
              await postUserHistory({ articleList: [id] }); // ID를 배열로 전달
            } catch {
              console.log("history 추가 오류");
            }
          }
        }
      } catch {
        console.log("개별 기사 fetching 오류 발생");
      }
    };
    fetchData();
  }, [id]); // id를 의존성 배열에 추가하여 변경될 때마다 fetchData가 호출되도록 함

  return (
    <Div>
      <Header>
        <BackButton
          onClick={() => {
            nav(-1);
          }}
        >
          <Img src={arrow_back} />
        </BackButton>
        <TagContainer>
          <HashtagButton
            isCategory={true}
            category={article?.category}
          ></HashtagButton>
          {dummyList.map((category, idx) => (
            <HashtagButton key={idx} category={category} />
          ))}
        </TagContainer>
      </Header>
      {id ? <Content data={article} /> : <p>invalid approach!</p>}
    </Div>
  );
};

export default Article;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  align-items: center;
`;

const BackButton = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const Img = styled.img``;
