import styled from "styled-components";
import Spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="로딩중" />
      <div>
        뉴쓱이 당신을 위해 <br />
        믿을 수 있는 정보를 가져오고 있어요.
      </div>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 23px;
  line-height: 29px;
  font-weight: 700;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.main};
  gap: 40px;
`;
