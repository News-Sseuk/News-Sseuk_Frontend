import styled from "styled-components";
import { useCategoryContext } from "../../context/CategoryContext"; // CategoryContext import
import Category from "./Category";

const categories = [
  "국회_정당",
  "대통령실",
  "북한",
  "행정",
  "국방_외교",
  "정치일반",
  "금융",
  "증권",
  "산업_재계",
  "중기_벤처",
  "부동산",
  "글로벌 경제",
  "생활경제",
  "경제 일반",
  "사건사고",
  "교육",
  "노동",
  "언론",
  "환경",
  "인권_복지",
  "식품_의료",
  "지역",
  "인물",
  "사회 일반",
  "건강정보",
  "자동차_시승기",
  "도로_교통",
  "여행_레저",
  "음식_맛집",
  "패션_뷰티",
  "공연_전시",
  "책",
  "종교",
  "날씨",
  "생활문화 일반",
  "모바일",
  "인터넷_SNS",
  "통신_뉴미디어",
  "IT 일반",
  "보안_해킹",
  "컴퓨터",
  "게임_리뷰",
  "과학 일반",
  "아시아_호주",
  "미국_중남미",
  "유럽",
  "중동_아프리카",
  "세계 일반",
  "연애",
];

const CategoryContainer = () => {
  const { selectedCategories, handleCategorySelection } = useCategoryContext();

  return (
    <Container>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          isSelected={selectedCategories.includes(category)}
          onClick={() =>
            handleCategorySelection(
              category,
              !selectedCategories.includes(category)
            )
          }
        />
      ))}
    </Container>
  );
};

export default CategoryContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;
