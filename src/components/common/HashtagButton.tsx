import styled from "styled-components";

type HashtagButtonProps = {
  category: string | undefined;
  isCategory?: boolean;
};

const HashtagButton: React.FC<HashtagButtonProps> = ({
  category,
  isCategory = false,
}) => {
  return <Container $iscategory={isCategory}>{category}</Container>;
};

export default HashtagButton;

interface ContainerProps {
  $iscategory: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.4rem;
  border: none;
  border-radius: 7px;
  background-color: ${({ $iscategory }) =>
    $iscategory ? "#003d62" : "#eae1e1"};
  color: ${({ $iscategory }) => ($iscategory ? "#eae1e1" : "#003d62")};
  font-size: 0.6rem;
  cursor: pointer;
  margin: 0.2rem;
`;
