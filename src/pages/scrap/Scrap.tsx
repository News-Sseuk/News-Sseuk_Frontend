import styled from "styled-components";
import left_vector from "../../assets/left_vector.png";
import right_vector from "../../assets/right_vector.png";
import { useState } from "react";
import { getImage } from "../../utils/get-category-image";
import ArticleList from "../../components/home/ArticleList";
import { useEffect } from "react";
import {
  getScrappedCategories,
  getScrappedArticles,
} from "../../api/user-controller";
import Loading from "../Loading";
import empty from "../../assets/empty.png";
import defaultImg from "../../assets/main.png";

const Scrap = () => {
  const [scrappedCategories, setScrappedCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. 카테고리 불러오는 api
        const categories = await getScrappedCategories();
        if (categories) {
          setScrappedCategories(categories);
          if (categories.length > 0) {
            const articleResponse = await getScrappedArticles(categories[0]);
            if (articleResponse) {
              setArticles(articleResponse.articleList);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //카테고리 변경 시 기사 업데이트
  useEffect(() => {
    const fetchArticles = async () => {
      if (scrappedCategories.length > 0) {
        const category = scrappedCategories[currentIndex];
        try {
          const articlesResponse = await getScrappedArticles(category);
          if (articlesResponse) {
            setArticles(articlesResponse.articleList);
          }
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      }
    };

    fetchArticles();
  }, [currentIndex]);

  // 카테고리에 맞는 이미지 가져오기
  const images = getImage(scrappedCategories);

  // 현재 인덱스 관리

  // 이전 카테고리로 이동
  const handlePrevClick = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : scrappedCategories.length - 1
    );
  };

  // 다음 카테고리로 이동
  const handleNextClick = () => {
    setCurrentIndex((prev) =>
      prev < scrappedCategories.length - 1 ? prev + 1 : 0
    );
  };

  // 현재 보여줄 카테고리와 이미지
  const currentCategory = scrappedCategories[currentIndex];
  const currentImage = images[currentIndex]; // 해당 인덱스에 맞는 이미지

  return (
    <>
      {!scrappedCategories ? <Loading /> : null}
      <Div>
        <Header>
          <Button src={left_vector} onClick={handlePrevClick} />

          <CarouselContainer>
            <CategoryWrapper>
              <Img
                src={currentImage === undefined ? defaultImg : currentImage}
              ></Img>
              <CategoryName>{currentCategory}</CategoryName>
            </CategoryWrapper>
          </CarouselContainer>
          <Button src={right_vector} onClick={handleNextClick} />
        </Header>

        <ContentWrapper>
          <Title>내 스크랩</Title>
          {articles.length > 0 ? (
            <ArticleContainer>
              <ArticleList articleArray={articles} />
            </ArticleContainer>
          ) : (
            <NoContent>
              <img src={empty} />
              <div>스크랩한 기사가 없어요</div>
            </NoContent>
          )}
        </ContentWrapper>
      </Div>
    </>
  );
};

export default Scrap;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding: 30px 20px;
  gap: 10px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 1rem;
  padding-bottom: 3rem;
`;

const Title = styled.div`
  color: #003d62;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 120px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 10px 10px 0 0;
`;

const CategoryName = styled.div`
  color: rgba(0, 61, 98, 1);
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.2rem;
`;

const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
