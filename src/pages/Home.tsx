import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import notification from "../assets/notification.svg";
import CategoryButton from "../components/home/CategoryButton";
import ArticleList from "../components/home/ArticleList";
import { fetchCategoryArticle } from "../api/user-controller";
import { useCategoryContext } from "../context/CategoryContext";
import { getCursorTime } from "../utils/get-cursor-time";
import type { ArticleType } from "../components/home/ArticleList";
import Loading from "./Loading";

const Home = () => {
  const [articleArray, setArticleArray] = useState<ArticleType[]>([]);
  const [cursorTime, setCursorTime] = useState<string>();

  // ArticleList에 ref 연결
  const articleListRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { count } = useInfiniteScroll({
    target: articleListRef,
    targetArray: articleArray,
    threshold: 0.2,
    endPoint: 3,
  });

  const nav = useNavigate();
  const { category } = useParams<string>();
  const { selectedCategories } = useCategoryContext();

  const fetchArticles = async (newCursorTime: string) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const decodedCategory = category ? decodeURIComponent(category) : "";
      if (decodedCategory) {
        const articles = await fetchCategoryArticle({
          category: decodedCategory,
          cursortime: newCursorTime,
        });

        if (articles && articles.length > 0) {
          setArticleArray((prev) => [...prev, ...articles]);

          const lastArticleDate = articles[articles.length - 1].date;
          setCursorTime(lastArticleDate);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (count > 0) {
      fetchArticles(cursorTime || getCursorTime());
    }
  }, [count]);

  useEffect(() => {
    setArticleArray([]);
    const initialCursorTime = getCursorTime();
    setCursorTime(initialCursorTime);
    fetchArticles(initialCursorTime);
  }, [category]);

  const handleCategoryClick = (newCategory: string) => {
    nav(`/home/${encodeURIComponent(newCategory)}`);
  };

  return (
    <Div>
      {isLoading ? <Loading /> : null}
      <Header>
        <Title>
          <Text>
            {new Date().getMonth() + 1}월 {new Date().getDate()}일, 오늘의 뉴쓱
          </Text>
          <Icon />
        </Title>
        <CategoryList>
          {selectedCategories.map((cat, index) => (
            <CategoryButton
              key={index}
              category={cat}
              isClicked={cat === category}
              handleClick={handleCategoryClick}
            />
          ))}
        </CategoryList>
      </Header>
      <Contents ref={articleListRef}>
        <ArticleList articleArray={articleArray} />
      </Contents>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #003d62;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const Text = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${notification});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-top: 0.5px solid ${({ theme }) => theme.colors.main};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.main};
  width: 100%;
  height: 20%;
  margin-top: 10px;
  padding: 24px 10px;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
