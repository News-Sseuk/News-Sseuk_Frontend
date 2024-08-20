import styled from "styled-components";
import Notification from "./Notification";

const Modal = () => {
  return (
    <Container>
      <Header>
        <Button>알림 전체 삭제</Button>
        <Button>알림 관리하기</Button>
      </Header>
      <Contents>
        <Notification />
      </Contents>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.div`
  background-color: #003d62;
  color: white;
  border-radius: 10px;
  padding: 9px 15px;
  font-weight: 700;
  font-size: 11px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
