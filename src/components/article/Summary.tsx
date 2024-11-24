import styled from "styled-components";
import share from "../../assets/share.svg";
import scrap from "../../assets/scrap.svg";
import report from "../../assets/report.svg";
import { createPortal } from "react-dom";
import { useState } from "react";
import Report from "./Report";
import Share from "./Share"; // Share 컴포넌트 import
import { postScrap } from "../../api/user-controller";
import Toast from "../common/Toast";

interface Props {
  content: string;
  articleId: string;
}

const Summary = (props: Props) => {
  const [modalType, setModalType] = useState<"report" | "share" | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleReportClick = () => {
    setModalType("report");
  };

  const handleShareClick = () => {
    setModalType("share");
  };

  const handleScrapClick = async () => {
    try {
      const isSuccess = await postScrap(props.articleId);
      if (isSuccess) {
        setToastMessage("스크랩 완료!");
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("스크랩 API 호출 중 오류 발생:", error);
    }
  };

  const closeModal = () => {
    setModalType(null);
  };

  const closeByReport = () => {
    setToastMessage("신고 완료!");
    setIsSuccess(true);
    setModalType(null);
  };

  return (
    <Container>
      <Title>요약</Title>
      {props.content.length > 0 ? (
        <Content>{props.content}</Content>
      ) : (
        <Content>요약 내용이 없습니다</Content>
      )}
      <IconContainer>
        <Icon src={share} onClick={handleShareClick} />
        <Icon src={scrap} onClick={handleScrapClick} />
        <Icon src={report} onClick={handleReportClick} />
      </IconContainer>
      {modalType &&
        createPortal(
          <>
            <Dimmed onClick={closeModal} />
            {modalType === "report" ? (
              <Report articleId={props.articleId} onClose={closeByReport} />
            ) : (
              <Share onClose={closeModal} />
            )}
          </>,
          document.getElementById("aside-root") as HTMLElement
        )}

      <Toast
        text={toastMessage}
        visible={isSuccess}
        setIsVisible={setIsSuccess}
      />
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid black;
  padding: 16px 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  padding: 10px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Icon = styled.img`
  width: 30px;
  height: 27px;
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
