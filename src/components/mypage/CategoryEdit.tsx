import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../context/CategoryContext";
import Button from "../login/Button";
import { fetchOnboardingCategory } from "../../api/user-controller";
import CategoryContainer from "../onboarding/CategoryContainer";
import BackButton from "../common/BackButton";

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
      <BackButton text="관심 카테고리 수정하기" />
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
