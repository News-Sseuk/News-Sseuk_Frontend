//utils
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import Button from "../../components/login/Button";
import CategoryContainer from "../../components/onboarding/CategoryContainer";

// 회원가입 로직 변경 : 회원가입 (access token 받아서 setitem ) -> onboarding 페이지로 넘어감
// 회원가입 api에 토큰 저장 로직 추가 해야함!

const Onboarding = () => {
  const nav = useNavigate();
  const handleComplete = () => {
    //if('api연결 성공')
    nav("/home");
  };

  return (
    <Div>
      <TextContainer>
        <Welcome>관심 카테고리 선택하기</Welcome>
        <Text>선택한 카테고리에 다른 기사를 볼 수 있어요.</Text>
      </TextContainer>
      <CategoryContainer />
      <Button
        handleClick={() => {
          handleComplete();
        }}
        title="선택 완료하기"
      />
    </Div>
  );
};

export default Onboarding;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 10px;
`;

const TextContainer = styled.div`
  color: #003d62;
  margin-bottom: 20px;
`;

const Welcome = styled.div`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
`;
