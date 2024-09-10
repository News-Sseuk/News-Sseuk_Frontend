import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";

// button component 재사용을 위해
// isEmailValid인 경우 color : '' 하고
// button component에서는 color 가 없는경우

const SignUp = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  return (
    <Container>
      <Wrapper>
        <Text>이름</Text>
        <Input></Input>
      </Wrapper>
      <Wrapper>
        <Text>이메일</Text>
        <Input></Input>
      </Wrapper>
      <Button
        title={isEmailValid ? "이메일 중복확인 완료" : "이메일 중복확인"}
        color={isEmailValid ? undefined : "#FFC7C2"}
      ></Button>
      <Wrapper>
        <Text>아이디</Text>
        <Input></Input>
      </Wrapper>
      <Wrapper>
        <Text>비밀번호</Text>
        <Input></Input>
      </Wrapper>
      <Button title="회원가입 완료하기"></Button>
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
