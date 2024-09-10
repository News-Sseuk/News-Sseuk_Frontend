import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";
import { fetchEmailValidCheck } from "../../api/fetch";

const SignUp = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // 이메일 유효성 검증 함수
  const handleEmailValidation = async () => {
    if (isEmailValid) {
      alert(
        "중복 확인 완료! 아이디와 비밀번호를 입력한 후 회원가입을 완료해주세요!"
      );
    } else {
      try {
        const result = await fetchEmailValidCheck(email);
        if (result.result === false) {
          alert("중복 이메일입니다. 다시 확인해주세요");
        } else {
          setIsEmailValid(true);
        }
      } catch {
        alert("이메일 검증 실패. 다시 시도해주세요");
      }
    }
  };

  // 이름 입력 핸들러
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // 이메일 입력 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Text>이름</Text>
        <Input type="text" value={name} onChange={handleNameChange} />
      </Wrapper>
      <Wrapper>
        <Text>이메일</Text>
        <Input type="email" value={email} onChange={handleEmailChange} />
      </Wrapper>
      <Button
        handleClick={handleEmailValidation}
        title={isEmailValid ? "이메일 중복확인 완료" : "이메일 중복확인"}
        color={isEmailValid ? undefined : "#FFC7C2"}
      />
      <Wrapper>
        <Text>아이디</Text>
        <Input />
      </Wrapper>
      <Wrapper>
        <Text>비밀번호</Text>
        <Input />
      </Wrapper>
      <Button
        title="회원가입 완료하기"
        handleClick={() => console.log("회원가입 완료")}
      />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 50px 20px 20px 20px;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 3px 5px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  outline: none;
`;

const Text = styled.span`
  font-size: 10px;
`;
