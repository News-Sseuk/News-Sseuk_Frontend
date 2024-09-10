import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/login/Button";

const Onboarding = () => {
  const nav = useNavigate();
  const handleComplete = () => {
    //if('api연결 성공')
    nav("/home");
  };

  const categories = [
    "정치",
    "경제",
    "사회",
    "테크",
    "세계",
    "노동",
    "환경",
    "인권",
    "문화",
    "라이프",
    "하나뭐지",
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
  height: 100%;
  width: 100%;
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
