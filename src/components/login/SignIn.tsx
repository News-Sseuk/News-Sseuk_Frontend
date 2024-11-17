//utils
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { fetchSignIn, fetchUserPrefers } from "../../api/user-controller";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

//data
import { categoryListState } from "../../store/atom";

//components
import Button from "./Button";
import Input from "./Input";

const SignIn = () => {
  const nav = useNavigate();
  const { value: email, onChange: onChangeEmail } = useInput({ initValue: "" });
  const { value: password, onChange: onChangePassWord } = useInput({
    initValue: "",
  });
  const setCategoryList = useSetRecoilState(categoryListState);

  const handleLogin = async () => {
    const userInfo = { email: email, password: password };
    try {
      const result = await fetchSignIn(userInfo); //reponse.data
      if (result.accessToken !== null) {
        // 로그인 시, category 불러와서 localStorage에 category로 저장
        try {
          const data = await fetchUserPrefers();
          if (data && data.result) {
            setCategoryList(data.result);
            localStorage.setItem("category", JSON.stringify(data.result));
            nav(`/home/${encodeURIComponent(data.result[0])}`);
          }
        } catch {
          throw new Error("category 불러오기 중 오류");
        }
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
