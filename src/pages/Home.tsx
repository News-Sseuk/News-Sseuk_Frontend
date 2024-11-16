import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createPortal } from "react-dom";

import notification from "../assets/notification.svg";
import CategoryButton from "../components/home/CategoryButton";
import ArticleList from "../components/home/ArticleList";
import { fetchCategoryArticle } from "../api/user-controller";
import { useCategoryContext } from "../context/CategoryContext";
import { getCursorTime } from "../utils/get-cursor-time";

const Home = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [articleArray, setArticleArray] = useState([]);
  const [cursorTime, setCursorTime] = useState(getCursorTime());

  const nav = useNavigate();
  const { category } = useParams();
  const { selectedCategories } = useCategoryContext();

  // API 호출 함수
  const fetchArticles = async (newCursorTime) => {
    const decodedCategory = decodeURIComponent(category);

    if (category) {
      const articles = await fetchCategoryArticle({
        category: decodedCategory,
        cursortime: newCursorTime,
      });

      if (articles && articles.length > 0) {
        setArticleArray((prev) => [...prev, ...articles]);

        // 마지막 article의 date를 ISO 형식으로 변환하여 cursorTime으로 설정
        const lastArticleDate = articles[articles.length - 1].date;
        const dateObject = new Date(lastArticleDate.replace(" ", "T"));
        setCursorTime(dateObject.toISOString());
      }
    }
  };

  // category 변경 시 처음 API 호출
  useEffect(() => {
    setArticleArray([]); // 새로운 카테고리로 변경 시 기존 기사 초기화
    fetchArticles(getCursorTime());
  }, [category]);

  // 무한 스크롤: inView가 true일 때마다 fetchArticles 호출
  useEffect(() => {
    if (inView) {
      fetchArticles(cursorTime);
    }
  }, [inView]);

  const handleCategoryClick = (newCategory) => {
    nav(`/home/${encodeURIComponent(newCategory)}`);
  };

  // const handleAlarmClick = () => {
  //   handleOpenModal();
  // };

  return (
    <Div>
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
      <Contents>
        <ArticleList articleArray={articleArray} />
        <div ref={ref}></div>
      </Contents>
    </Div>
  );
};

export default Home;

// 스타일 컴포넌트 정의
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
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;
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
