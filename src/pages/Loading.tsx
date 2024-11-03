import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      뉴쓱이 당신을 위해 <br />
      믿을 수 있는 정보를 가져오고 있어요.
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
  bottom: 100px;
  font-size: 23px;
  line-height: 29px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.main};
`;
