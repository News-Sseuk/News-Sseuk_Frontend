import styled from "styled-components";
import arrow_back from "../../assets/arrow_back.png";

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
      <BackButton
        onClick={() => {
          nav(-1);
        }}
      >
        <img src={arrow_back} />
        <div>관심 카테고리 수정하기</div>
      </BackButton>
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

const BackButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  cursor: pointer;
  gap: 20px;
`;
