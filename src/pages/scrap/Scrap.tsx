import styled from "styled-components";
import left_vector from "../../assets/left_vector.png";
import right_vector from "../../assets/right_vector.png";
import { useState } from "react";
import { getImage } from "../../utils/get-category-image";
import ArticleList from "../../components/home/ArticleList";

const Scrap = () => {
  // 사용자가 스크랩한 카테고리 리스트
  const [scrappedCategories, setScrappedCategories] = useState([
    "공연/전시",
    "사건사고",
    "모바일",
    "도로/교통",
  ]);

  // 카테고리에 맞는 이미지 가져오기
  const images = getImage(scrappedCategories);

  // 현재 인덱스 관리
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <Div>
        <Header>
          {/* 이전 카테고리로 */}
          <Button src={left_vector} onClick={handlePrevClick} />

          <CarouselContainer>
            {/* 현재 인덱스에 맞는 카테고리 이미지와 스크랩카드 */}
            <CategoryWrapper>
              <Img src={currentImage}></Img>
              <CategoryName>{currentCategory}</CategoryName>
            </CategoryWrapper>
          </CarouselContainer>
          {/* 다음 카테고리로 */}
          <Button src={right_vector} onClick={handleNextClick} />
        </Header>

        <ContentWrapper>
          <Title>내 스크랩</Title>
          <ArticleContainer>
            <ArticleList />
          </ArticleContainer>
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

// 카테고리 이미지 스타일
const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
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

// interface ImgProps {
//   imgsrc: string;
// }

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
