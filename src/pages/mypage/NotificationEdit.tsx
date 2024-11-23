import styled from "styled-components";
import BackButton from "../../components/common/BackButton";

const NotificationEdit = () => {
  return (
    <Div>
      <BackButton />
      <Content>알림이 없습니다</Content>
    </Div>
  );
};

export default NotificationEdit;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  height: 100%;

  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
