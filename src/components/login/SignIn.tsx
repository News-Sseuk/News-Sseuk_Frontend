import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <Container>
      <Wrapper>
        <Text>이메일</Text>
        <Input></Input>
      </Wrapper>
      <Wrapper>
        <Text>비밀번호</Text>
        <Input></Input>
      </Wrapper>
      <Button
        handleClick={() => handleLogin()}
        title="뉴쓱의 세계로..."
      ></Button>
    </Container>
  );
};

export default SignIn;

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
