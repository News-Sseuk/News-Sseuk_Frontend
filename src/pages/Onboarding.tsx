import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {

  const nav = useNavigate();

  const categories = ["정치","경제","사회","테크","세계","노동","환경","인권","문화","라이프","하나뭐지"];
  const [clickedStates, setClickedStates] = useState(new Array(categories.length).fill(false));

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
          <Category key={elm} onClick={() => handleCategoryClick(index)} click={clickedStates[index]}>
            {elm}
          </Category>
        ))}
      </CategoryContainer>
      <ButtonContainer>
        <CompleteButton onClick={()=>nav("/")}>선택 완료하기</CompleteButton>
      </ButtonContainer>
    </Div>
  );
};

export default Onboarding;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: white;
`;

const TextContainer = styled.div`
  margin: 3rem;
  color: #003d62;
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
  gap: 0.7rem;
  margin: 0 1rem;
  justify-content: flex-start;
`;

interface CategoryProps {
  click: boolean;
}

const Category = styled.div<CategoryProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7vw;
  height: 8vh;
  font-weight : ${(props)=>(props.click? '800' : '600')};
  color: ${(props) => (props.click ? 'rgba(255, 252, 252, 1)' : '#003D62')};
  background-color: ${(props) => (props.click ? '#003D62' : 'rgba(255, 252, 252, 1)')};
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem;
`;

const CompleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(205, 228, 153, 1);
  border-radius: 12px;
  border: none;
  width: 69vw;
  height: 6vh;
  font-weight: 700;
  cursor: pointer;
  padding: 0 3rem;
`;
