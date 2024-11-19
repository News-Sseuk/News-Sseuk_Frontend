import styled from "styled-components";

type CategoryButtonProps = {
  category: string;
  isClicked?: boolean;
  handleClick: (newCategory: string) => void;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isClicked = false,
  handleClick,
}) => {
  return (
    <Container
      $isClicked={isClicked}
      onClick={() => {
        handleClick(category);
      }}
    >
      {category}
    </Container>
  );
};

export default CategoryButton;

const Container = styled.div<{ $isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 15px;
  border: none;
  border-radius: 10px;
  background-color: ${({ $isClicked }) => ($isClicked ? "#003d62" : "#FFFCFC")};
  color: ${({ $isClicked }) => ($isClicked ? "#FFFCFC" : "#003d62")};
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
`;
