import styled from "styled-components";
import Notification from "./Notification";
import { useRef } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  objectList: {
    title: string;
    content: string;
    date: string;
    tagList: string[];
  }[];
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const modalRef = useRef(null);

  return (
    <>
      {show && (
        <Overlay show={show} onClick={onClose} ref={modalRef}>
          <Content show={show}>
            <Container>
              <Header>
                <Button>알림 전체 삭제</Button>
                <Button>알림 관리하기</Button>
              </Header>
              <Contents>
                <Notification />
                <Notification />
                <Notification />
              </Contents>
            </Container>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;

const Content = styled.div<{ show: boolean }>`
  position: fixed;
  height: 100%;
  right: 0;
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 60%; /* 최대 너비를 90%로 설정하여 화면 크기에 따라 유연하게 반응 */
  margin: 0 auto; /* 중앙 정렬 */
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 300ms ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
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
