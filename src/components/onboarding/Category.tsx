import styled from "styled-components";

interface CategoryProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const Category = ({ category, isSelected, onClick }: CategoryProps) => {
  return (
    <StyledCategory selected={isSelected} onClick={onClick}>
      {category}
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled.div<{ selected: boolean }>`
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
