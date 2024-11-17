import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../context/CategoryContext";
import Button from "../login/Button";
import { fetchOnboardingCategory } from "../../api/user-controller";
import CategoryContainer from "../onboarding/CategoryContainer";

const CategoryEdit = () => {
  const nav = useNavigate();
  const { selectedCategories } = useCategoryContext();

  const handleSaveChanges = async () => {
    const result = await fetchOnboardingCategory(selectedCategories);
    if (result.isSuccess) {
      alert("카테고리 설정이 완료되었어요!");
      localStorage.setItem("category", JSON.stringify(selectedCategories));
      nav(`/home/${selectedCategories[0]}`);
    }
  };

  return (
    <Div>
      <TextContainer>
        <Title>관심 카테고리 수정</Title>
      </TextContainer>
      <CategoryContainer />
      <Button handleClick={handleSaveChanges} title="변경사항 저장" />
    </Div>
  );
};

export default CategoryEdit;

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

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;
