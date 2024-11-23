//utils
import styled from "styled-components";
import { useState } from "react";

//component
import HiddenDiv from "../../components/login/HiddenDiv";
import SignUp from "../../components/login/SignUp";
import SignIn from "../../components/login/SignIn";

const Login = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleJoinClick = () => {
    setIsJoinOpen(!isJoinOpen);
    setIsLoginOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsJoinOpen(false);
  };

  return (
    <Div>
      <TextContainer>
        <Welcome>어서 오세요!</Welcome>
        <Text>진실된 정보만 빠르게, 뉴쓱입니다. 환영해요!</Text>
      </TextContainer>
      <ButtonContainer>
        <DropDownContainer>
          <HiddenDiv
            title="회원가입 하기"
            handleClick={handleJoinClick}
            isDropDownOpen={isJoinOpen}
          >
            <SignUp
              setIsJoinOpen={setIsJoinOpen}
              setIsLoginOpen={setIsLoginOpen}
            />
          </HiddenDiv>
        </DropDownContainer>
        <DropDownContainer>
          <HiddenDiv
            title="로그인 하기"
            handleClick={handleLoginClick}
            isDropDownOpen={isLoginOpen}
          >
            <SignIn />
          </HiddenDiv>
        </DropDownContainer>
      </ButtonContainer>
    </Div>
  );
};

export default Login;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TextContainer = styled.div`
  margin: 40px 0;
  color: #003d62;
`;

const Welcome = styled.div`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const Text = styled.div`
  font-size: 12px;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: white;
  transition: margin-top 0.3s ease;
`;
