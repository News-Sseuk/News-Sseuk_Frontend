import styled from "styled-components";

interface CategoryButtonProps {
  category: string;
}

const CategoryButton = ({ category }: CategoryButtonProps) => {
  return <Container>{category}</Container>;
};

export default CategoryButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border: none;
  border-radius: 0.7rem;
  /* background-color: #FFFCFC; */
  background-color: #003d62;
  color: white;
  /* color: #003d62; */
  font-size: 10px;
  cursor: pointer;
`;
