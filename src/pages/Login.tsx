import styled from "styled-components";
import kakao_login from "../assets/kakao_login.png"

const Login = () =>{

    const handleJoinClick  = () =>{
        return;
    }
    
    const handleLoginClick = () =>{
        return;
    }
    return (<Div>
        <TextContainer>
            <Welcome>어서 오세요!</Welcome>
            <Text>진실된 정보만 빠르게, 뉴쓱입니다. 환영해요!</Text>
        </TextContainer>
        <ButtonContainer>
            <Button onClick={handleJoinClick}>회원가입 하기</Button>
            <Button onClick={handleLoginClick}>로그인 하기</Button>
            <KakaoLogin imgsrc={kakao_login}/>
        </ButtonContainer>
    </Div>);
}

export default Login;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width : 100%;
`;

const TextContainer = styled.div`
    margin : 3rem;
    color : #003D62;
`;

const Welcome = styled.div`
    font-weight: 700;
    margin-bottom : 2rem;
    font-size : 1.2rem;
`;

const Text = styled.div`
    font-size : 0.8rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap : 0.8rem;
    color : white;
    border : 1px solid red;
`;

const Button = styled.div`
    display: flex;
    justify-content : center;
    align-items : center;
    background-color : #003D62;
    border-radius : 10px;
    width : 20%;
    height : 6.5vh;
    cursor : pointer;
`;

interface ButtonProps {
    imgsrc: string;
  }

const KakaoLogin = styled.div<ButtonProps>`
  display: flex;
  justify-content : center;
  align-items : center;
  width : 20%;
  height : 6.5vh;
  background-image: url(${(props) => props.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;