import styled from "styled-components";
import { useCategoryContext } from "../../context/CategoryContext";

interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  const { selectedCategories, handleCategorySelection } = useCategoryContext();
  const selected = selectedCategories.includes(category);

  const handleClick = () => {
    const newSelected = !selected;
    handleCategorySelection(category, newSelected);
    console.log(selectedCategories);
  };

  return (
    <StyledCategory selected={selected} onClick={handleClick}>
      {category}
    </StyledCategory>
  );
};

export default Category;

interface StyledCategoryProps {
  selected: boolean;
}

const StyledCategory = styled.div<StyledCategoryProps>`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  font-weight: ${(props) => (props.selected ? "800" : "600")};
  color: ${(props) => (props.selected ? " #FCFAFA" : "#003D62")};
  background-color: ${(props) => (props.selected ? "#003D62" : "none")};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 5px 10px;
  white-space: normal;
  word-break: keep-all;
`;
