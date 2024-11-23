import styled from "styled-components";
import Button from "./Button";
import { fetchEmailValidCheck, fetchSignUp } from "../../api/user-controller";
import Input from "./Input";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsJoinOpen, setIsLoginOpen }) => {
  const nav = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const emailRule = (v: string) => {
    if (v === "") return ""; // 빈 문자열 반환
    if (!v.includes("@")) {
      return "형식이 올바르지 않습니다.";
    }
    return "";
  };

  const passwordRule = (v: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    if (v.length !== 0 && !regex.test(v)) {
      return "영어, 숫자를 포함한 8~15자리 비밀번호를 입력해주세요";
    }
    return "";
  };

  const {
    value: email,
    valid: validEmail,
    onChange: onChangeEmail,
  } = useInput({
    initValue: "",
    rule: emailRule,
  });

  const {
    value: name,
    valid: validName,
    onChange: onChangeName,
  } = useInput({
    initValue: "",
  });

  const {
    value: id,
    valid: validId,
    onChange: onChangeId,
    setValue: setId,
  } = useInput({
    initValue: "",
  });

  const {
    value: password,
    valid: validPassWord,
    onChange: onChangePassWord,
  } = useInput({
    initValue: "",
    rule: passwordRule,
  });

  // 서버 이메일 중복 검사
  const handleEmailValidation = async () => {
    if (validEmail) {
      alert(
        "중복 확인 완료! 아이디와 비밀번호를 입력한 후 회원가입을 완료해주세요!"
      );
    } else {
      try {
        const result = await fetchEmailValidCheck(email);
        if (result?.result === false) {
          alert("이미 등록된 이메일입니다.");
        } else {
          setIsEmailValid(true);
          setId(email),
            alert(
              "중복 확인 완료! 아이디와 비밀번호를 입력한 후 회원가입을 완료해주세요!"
            );
        }
      } catch {
        alert("이메일 검증 실패. 다시 시도해주세요");
      }
    }
  };

  // 회원가입 요청
  const handleClickSignUp = async () => {
    const loginInfo = { name: name, email: id, password: password };
    const passwordError = passwordRule(password);
    if (passwordError) {
      alert(passwordError);
      return; // 비밀번호가 유효하지 않으면 함수 종료
    }
    try {
      const result = await fetchSignUp(loginInfo);
      if (result) {
        alert("회원가입 성공! 카테고리 설정 후 뉴쓱의 세계로! ");
        setIsJoinOpen(false);
        setIsLoginOpen(true);
        nav("/onboarding");
      }
    } catch {
      alert("회원가입 실패. 다시 시도해주세요");
    }
  };

  return (
    <Container>
      <Input
        label="이름"
        value={name}
        onChange={onChangeName}
        valid={validName}
        placeholder="이름을 입력해주세요"
      />
      <Input
        label="이메일"
        type="email"
        value={email}
        onChange={onChangeEmail}
        valid={validEmail}
        placeholder="이메일을 입력해주세요"
      />
      <Button
        handleClick={handleEmailValidation}
        title={isEmailValid ? "이메일 중복확인 완료" : "이메일 중복확인"}
        color={isEmailValid ? undefined : "#FFC7C2"}
      />
      <Input
        label="아이디"
        value={id}
        onChange={onChangeId}
        valid={validId}
        placeholder="이메일을 입력해주세요"
      />
      <Input
        label="비밀번호"
        value={password}
        onChange={onChangePassWord}
        valid={validPassWord}
        type="password"
        placeholder="영어, 숫자 포함 8~15자리"
      />
      <Button title="회원가입 완료하기" handleClick={handleClickSignUp} />
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
