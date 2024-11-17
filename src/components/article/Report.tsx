import styled from "styled-components";
import { fetchReport } from "../../api/user-controller";

interface Props {
  articleId: string;
  onClose: () => void;
}

const Report = (props: Props) => {
  const handleReasonClick = async (reason: string) => {
    const articleId = props.articleId;
    try {
      const data = await fetchReport({ articleId, reason });
      if (data) {
        props.onClose();
      }
    } catch (error) {
      console.error("신고 API 호출 중 오류 발생:", error);
    }
  };

  return (
    <Wrapper>
      <Reason
        onClick={() => {
          handleReasonClick("INACCURATE_SUMMARY");
        }}
      >
        부정확한 요약
      </Reason>
      <Reason
        onClick={() => {
          handleReasonClick("ILLOGICAL_STRUCTURE");
        }}
      >
        비논리적인 문제제기
      </Reason>
      <Reason
        onClick={() => {
          handleReasonClick("INVALID_GROUNDS");
        }}
      >
        타당하지 않은 근거
      </Reason>
      <Reason
        onClick={() => {
          handleReasonClick("NARROW_VIEW");
        }}
      >
        편협한 시각
      </Reason>
      <Reason
        onClick={() => {
          handleReasonClick("SEVERE_CRITICISM");
        }}
      >
        무차별적 비판
      </Reason>
      <Title>신고하기</Title>
    </Wrapper>
  );
};

export default Report;

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
