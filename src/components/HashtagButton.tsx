import styled from "styled-components";

const HashtagButton = ({ category }) => {
  return <Container>{category}</Container>;
};

export default HashtagButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.4rem;
  border: none;
  border-radius: 0.7rem;
  background-color: #eae1e1;
  color: #003d62;
  font-size: 0.6rem;
  cursor: pointer;
  margin: 0.2rem;
`;
