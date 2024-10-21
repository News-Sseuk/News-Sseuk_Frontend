import styled from "styled-components";

type HashtagButtonProps = {
  category: string;
  isCategory?: boolean;
};

const HashtagButton: React.FC<HashtagButtonProps> = ({
  category,
  isCategory = false,
}) => {
  return <Container isCategory={isCategory}>{category}</Container>;
};

export default HashtagButton;

const Container = styled.div<{ isCategory: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.4rem;
  border: none;
  border-radius: 7px;
  background-color: ${({ isCategory }) => (isCategory ? "#003d62" : "#eae1e1")};
  color: ${({ isCategory }) => (isCategory ? "#eae1e1" : "#003d62")};
  font-size: 0.6rem;
  cursor: pointer;
  margin: 0.2rem;
`;
