import ArticleCard from "../common/ArticleCard";
import { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { getTime } from "../../utils/get-cursor-time";
import styled from "styled-components";
import { fetchSearch } from "../../api/user-controller";
import type { searchApiInterface } from "../../api/user-controller";
import { ArticleType } from "../home/ArticleList";
import Spinner from "../../assets/spinner.gif";

interface Props {
  searchInput: string;
  isFiltered: boolean;
  isLatest: boolean;
}

const ArticleList = (props: Props) => {
  const [articleArray, setArticleArray] = useState<ArticleType[]>([]);
  const [lastArticleId, setLastArticleId] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchResults = async (newCursorTime: string) => {
    if (isLoading) return;
    setIsLoading(true);

    const searchParams: searchApiInterface = {
      keyword: props.searchInput,
      onOff: props.isFiltered ? "on" : "off",
      sort: props.isLatest ? "latest" : "reliable",
      cursorTime: newCursorTime,
    };

    try {
      const result = await fetchSearch(searchParams);
      if (result && result.length > 0) {
        setArticleArray((prev) => [...prev, ...result]);
        const lastDate = result[result.length - 1]?.publishedDate;
        setLastArticleId(lastDate); // 마지막 ID 업데이트
      }
    } catch (error) {
      console.error("검색 결과를 불러오는 중 오류 발생:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 필터 또는 정렬 상태가 변경될 때 새 검색 요청 수행
  useEffect(() => {
    setArticleArray([]); // 이전 검색 결과 초기화
    const initialCursorTime = getTime();
    setLastArticleId(initialCursorTime);
    fetchSearchResults(initialCursorTime);
  }, [props.isFiltered, props.isLatest, props.searchInput]);

  const articleListRef = useRef<HTMLDivElement>(null);

  const { count } = useInfiniteScroll({
    target: articleListRef,
    targetArray: articleArray,
    threshold: 0.2,
    endPoint: 3,
  });

  // 스크롤 이벤트 발생 시 추가 검색 요청 수행
  useEffect(() => {
    if (count > 0 && articleArray[articleArray.length - 1]?.hasNext) {
      fetchSearchResults(lastArticleId || getTime());
    }
  }, [count]);

  return (
    <div ref={articleListRef}>
      {articleArray.length > 0 ? (
        articleArray.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))
      ) : (
        <NoContent>
          <img src={Spinner} width={"30px"} alt="Loading..." />
        </NoContent>
      )}
    </div>
  );
};

export default ArticleList;

const NoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
