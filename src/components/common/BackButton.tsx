import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import arrow_back from "../../assets/arrow_back.png";

interface Props {
  text?: string;
}

const BackButton = (props: Props) => {
  const nav = useNavigate();

  return (
    <Container>
      <img
        src={arrow_back}
        onClick={() => {
          nav(-1);
        }}
      />
      <div>{props.text ? props.text : "뒤로가기"}</div>
    </Container>
  );
};

export default BackButton;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  cursor: pointer;
  gap: 20px;
`;
