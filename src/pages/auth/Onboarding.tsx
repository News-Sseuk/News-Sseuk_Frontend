import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/login/Button";

const Onboarding = () => {
  const nav = useNavigate();
  const handleComplete = () => {
    //if('api연결 성공')
    nav("/home");
  };

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

  const [clickedStates, setClickedStates] = useState(
    new Array(categories.length).fill(false)
  );

  const handleCategoryClick = (index) => {
    const updatedClickedStates = [...clickedStates];
    updatedClickedStates[index] = !updatedClickedStates[index];
    setClickedStates(updatedClickedStates);
  };

  return (
    <Div>
      <TextContainer>
        <Welcome>관심 카테고리 선택하기</Welcome>
        <Text>선택한 카테고리에 다른 기사를 볼 수 있어요.</Text>
      </TextContainer>
      <CategoryContainer>
        {categories.map((elm, index) => (
          <Category
            key={elm}
            onClick={() => handleCategoryClick(index)}
            click={clickedStates[index]}
          >
            {elm}
          </Category>
        ))}
      </CategoryContainer>
      <Button
        handleClick={() => {
          handleComplete();
        }}
        title="선택 완료하기"
      />
    </Div>
  );
};

export default Onboarding;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 10px;
`;

const TextContainer = styled.div`
  color: #003d62;
  margin-bottom: 20px;
`;

const Welcome = styled.div`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

interface CategoryProps {
  click: boolean;
}

const Category = styled.div<CategoryProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-weight: ${(props) => (props.click ? "800" : "600")};
  color: ${(props) => (props.click ? "rgba(255, 252, 252, 1)" : "#003D62")};
  background-color: ${(props) =>
    props.click ? "#003D62" : "rgba(255, 252, 252, 1)"};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 13px;
`;
