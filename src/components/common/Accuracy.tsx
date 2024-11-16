import styled from "styled-components";

interface Props {
  accuracy: number | undefined;
}

const Accuracy = (props: Props) => {
  return <Container>{props.accuracy}</Container>;
};

export default Accuracy;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 6px;
  padding: 4px 5px;
  color: ${({ theme }) => theme.colors.main};
  font-size: 11px;
  font-weight: 700;
`;
