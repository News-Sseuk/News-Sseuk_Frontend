import styled from "styled-components";
import Spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="로딩중" width={"100px"} />
      <Text>
        뉴쓱이 당신을 위해 <br />
        믿을 수 있는 정보를 가져오고 있어요.
      </Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  background-color: #fcfafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 95%;
  color: ${({ theme }) => theme.colors.main};
  gap: 40px;
  z-index: 1000;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 29px;
  font-weight: 700;
`;

// background-color: #fcfafa;
//   min-width: 300px;
//   max-width: 820px;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   padding: 10px 20px;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   margin: 0 auto;
