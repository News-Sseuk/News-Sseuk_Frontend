import styled from "styled-components";
import Category from "./Category";
import { CategoryProvider } from "../../context/CategoryContext";

const categories = [
  "국회/정당",
  "대통령실",
  "북한",
  "행정",
  "국방/외교",
  "정치일반",
  "금융",
  "증권",
  "산업/재계",
  "중기/벤처",
  "부동산",
  "글로벌 경제",
  "생활경제",
  "경제 일반",
  "사건사고",
  "교육",
  "노동",
  "언론",
  "환경",
  "인권/복지",
  "식품/의료",
  "지역",
  "인물",
  "사회 일반",
  "건강정보",
  "자동차/시승기",
  "도로/교통",
  "여행/레저",
  "음식/맛집",
  "패션/뷰티",
  "공연/전시",
  "책",
  "종교",
  "날씨",
  "생활문화 일반",
  "모바일",
  "인터넷/SNS",
  "통신/뉴미디어",
  "IT 일반",
  "보안/해킹",
  "컴퓨터",
  "게임/리뷰",
  "과학 일반",
  "아시아/호주",
  "미국/중남미",
  "유럽",
  "중동/아프리카",
  "세계 일반",
];

const CategoryContainer = () => {
  return (
    <CategoryProvider>
      <Container>
        {categories.map((elem) => (
          <Category category={elem} />
        ))}
      </Container>
    </CategoryProvider>
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
