import styled from "styled-components";

interface Props {
  onClose: () => void;
}

const Share = (props: Props) => {
  const handleLinkClick = () => {
    alert("링크 복사 완료!");
    props.onClose();
  };
  return (
    <Wrapper>
      <Reason onClick={handleLinkClick}>공유링크</Reason>
      <Title>공유하기</Title>
    </Wrapper>
  );
};

export default Share;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px; /* 모달의 너비를 적절하게 설정합니다 */
  padding: 30px 20px;
  gap: 15px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  z-index: 1000; /* 모달을 최상단에 표시합니다 */
`;

const Reason = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  line-height: 29px;
  font-weight: 400;
  background-color: #eae1e1;
  border-radius: 4px;
  padding: 2px 10px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #003d62;
  font-weight: 700;
  line-height: 29px;
  font-size: 20px;
  background-color: white;
  text-align: center;
  margin-top: 10px;
`;
