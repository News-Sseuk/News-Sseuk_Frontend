import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import Button from "../../components/login/Button";
import CategoryContainer from "../../components/onboarding/CategoryContainer";
import { useCategoryContext } from "../../context/CategoryContext"; // Import the context
import { fetchOnboardingCategory } from "../../api/user-controller";

const Content = () => {
  const nav = useNavigate();
  const { selectedCategories } = useCategoryContext(); // Access the selected categories

  const handleComplete = async () => {
    const result = await fetchOnboardingCategory(selectedCategories);
    if (result.isSuccess) {
      alert("카테고리 설정이 완료되었어요!");
      nav("/home");
    }
  };

  return (
    <Div>
      <TextContainer>
        <Welcome>관심 카테고리 선택하기</Welcome>
        <Text>선택한 카테고리에 다른 기사를 볼 수 있어요.</Text>
      </TextContainer>
      <CategoryContainer />
      <Button handleClick={handleComplete} title="선택 완료하기" />
    </Div>
  );
};

export default Content;

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
