import styled from "styled-components";

interface Props {
  accuracy: number | undefined;
}

const Accuracy = (props: Props) => {
  const $isLow = props.accuracy ? props.accuracy < 30 : false;
  return <Container $isLow={$isLow}>{props.accuracy}%</Container>;
};

export default Accuracy;

interface ContainerProps {
  $isLow: boolean;
}
const Container = styled.div<ContainerProps>`
  background-color: ${({ theme, $isLow }) =>
    $isLow ? theme.colors.pink : theme.colors.green};
  border-radius: 6px;
  padding: 4px 5px;
  color: ${({ theme, $isLow }) => ($isLow ? "white" : theme.colors.main)};
  font-size: 11px;
  font-weight: 700;
`;
