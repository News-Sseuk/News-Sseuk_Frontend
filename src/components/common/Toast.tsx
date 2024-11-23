import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface Props {
  text?: string;
  visible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({ text, visible, setIsVisible }: Props) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, setIsVisible]);

  if (!visible) return null;

  return createPortal(
    <Container $visible={visible}>{text}</Container>,
    document.getElementById("toast") as HTMLElement
  );
};
export default Toast;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(40px);
  }
  to {
    opacity: 0;
    transform: translateY(0px); /* 위로 사라지는 효과 */
  }
`;

const Container = styled.div<{ $visible: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 8px 14px;
  color: white;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 0.3s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;
