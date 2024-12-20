import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HashtagButton from "../components/common/HashtagButton";
import arrow_back from "../assets/arrow_back.png";
import Content from "../components/article/Content";
import { useEffect, useState } from "react";
import { fetchArticle } from "../api/user-controller";
import type { ArticleType } from "../components/home/ArticleList";

const Article = () => {
  const nav = useNavigate();

  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await fetchArticle(id);
          if (data) {
            setArticle(data);
          }
        }
      } catch {
        throw new Error("개별기사 fetching 오류");
      }
    };
    fetchData();
  }, [id]);

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
          {article?.hashTagList && article?.hashTagList.length > 0
            ? article?.hashTagList.map((category, idx) => (
                <HashtagButton key={idx} category={category} />
              ))
            : null}
        </TagContainer>
      </Header>
      {article ? <Content data={article} /> : <p>invalid approach!</p>}
    </Div>
  );
};

export default Article;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
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
