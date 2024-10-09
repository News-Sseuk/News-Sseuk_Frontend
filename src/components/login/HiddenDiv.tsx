import styled from "styled-components";
import { ReactNode } from "react";

interface HiddenDivProps {
  children: ReactNode;
  title: string;
  handleClick: () => void;
  isDropDownOpen: boolean;
}

const HiddenDiv = ({
  children,
  title,
  handleClick,
  isDropDownOpen,
}: HiddenDivProps) => {
  return (
    <Container open={isDropDownOpen}>
      <Button onClick={handleClick}>{title}</Button>
      <DropDownDiv open={isDropDownOpen}>{children}</DropDownDiv>
    </Container>
  );
};

interface ContainerProps {
  open: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  flex: 1;
  margin-bottom: ${({ open }) =>
    open
      ? "343px"
      : "0"}; //드롭다운 열렸을 때 아래 요소를 밀어내기 위한 여유 공간 확보
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 9px;
  width: 100%;
  height: 45px;
  cursor: pointer;
  font-size: 13px;
  z-index: 2; /* 드롭다운 위에 위치하도록 z-index 설정 */
`;

interface DropDownProps {
  open: boolean;
}

const DropDownDiv = styled.div<DropDownProps>`
  width: 100%;
  max-height: ${({ open }) => (open ? "350px" : "0")};
  overflow: hidden;
  opacity: ${({ open }) => (open ? "1" : "0")};
  border: ${({ open }) => (open ? "1px solid #003D62" : "none")};
  border-radius: 12px;
  position: absolute; /* Button 아래에 위치하도록 absolute 유지 */
  top: 20px; /* Button 아래로 위치 조정 */
  left: 0;
  right: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease, border 0.3s ease;
  z-index: 1; /* Button 뒤에 위치하도록 z-index 설정 */
`;

export default HiddenDiv;
