//utils
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { fetchSignIn } from "../../api/user-controller";
import { useNavigate } from "react-router-dom";

//components
import Button from "./Button";
import Input from "./Input";

const SignIn = () => {
  const nav = useNavigate();
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassWord } = useInput("");

  const handleLogin = async () => {
    const userInfo = { email: email, password: password };
    try {
      const result = await fetchSignIn(userInfo); //reponse.data
      console.log(result);
      if (result) {
        nav("/home");
      }
    } catch {
      alert("로그인 실패. 입력값을 확인해주세요");
    }
  };

  return (
    <Container>
      <Input
        label="이메일"
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일을 입력해주세요"
      />
      <Input
        label="비밀번호"
        value={password}
        onChange={onChangePassWord}
        type="password"
        placeholder="영어, 숫자 포함 8~15자리"
      />
      <Button handleClick={handleLogin} title="뉴쓱의 세계로..."></Button>
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
