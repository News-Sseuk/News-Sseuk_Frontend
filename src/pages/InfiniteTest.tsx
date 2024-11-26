import ArticleCard from "../components/common/ArticleCard";
import { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { getCursorTime } from "../utils/get-cursor-time";
import { fetchCategoryArticle } from "../api/user-controller";
import Spinner from "../assets/spinner.gif";
import styled from "styled-components";

export interface ArticleType {
  category: string;
  description: string;
  hashTagList: string[];
  id: string;
  publishedDate: string;
  reliability: number;
  title: string;
  issue: string;
}

interface Props {
  category: string | undefined;
}

const ArticleList = (props: Props) => {
  const [articleArray, setArticleArray] = useState<ArticleType[]>([]);
  const [cursorTime, setCursorTime] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const articleListRef = useRef<HTMLDivElement>(null);

  const { count } = useInfiniteScroll({
    target: articleListRef,
    targetArray: articleArray,
    threshold: 0.2,
    endPoint: 3,
  });

  useEffect(() => {
    setArticleArray([]);
    const initialCursorTime = getCursorTime();
    setCursorTime(initialCursorTime);
    fetchArticles(initialCursorTime);
  }, [props.category]);

  const fetchArticles = async (newCursorTime: string) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const decodedCategory = props.category
        ? decodeURIComponent(props.category)
        : "";
      if (decodedCategory) {
        const articles = await fetchCategoryArticle({
          category: decodedCategory,
          cursortime: newCursorTime,
        });

        if (articles && articles.length > 0) {
          setArticleArray((prev) => [...prev, ...articles]);

          const lastArticleDate = articles[articles.length - 1].publishedDate;
          const dateObject = lastArticleDate.replace(" ", "T");
          setCursorTime(dateObject);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(cursorTime || getCursorTime());
  }, [count]);

  return (
    <div ref={articleListRef}>
      {articleArray &&
        articleArray?.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      <NoContent>
        <img src={Spinner} width={"30px"} />
      </NoContent>
    </div>
  );
};

export default ArticleList;

const NoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
