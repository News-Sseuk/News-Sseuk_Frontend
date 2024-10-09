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
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-weight: ${(props) => (props.selected ? "800" : "600")};
  color: ${(props) => (props.selected ? "rgba(255, 252, 252, 1)" : "#003D62")};
  background-color: ${(props) =>
    props.selected ? "#003D62" : "rgba(255, 252, 252, 1)"};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 13px;
`;
