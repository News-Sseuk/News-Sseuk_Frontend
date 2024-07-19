import styled from "styled-components";
import pfp from "../assets/pfp.jpg";
import edit from "../assets/edit.png";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

const InfoEdit = () => {

  const nav = useNavigate();

  return (
    <Div>
      <InfoWrapper>
        <ProfileImg imgsrc={pfp} />
        <Info>
          <Nickname>닉네임 님</Nickname>
          <Rate>쓱싹 등급</Rate>
        </Info>
        <EditButton imgsrc={edit} />
      </InfoWrapper>
      <EditContainer>
        <EditWrapper>
          <Title>이름</Title>
          <Input />
        </EditWrapper>
        <EditWrapper>
          <Title>이메일</Title>
          <Input />
        </EditWrapper>
      </EditContainer>
      <CompleteButtonContainer>
        <CompleteButton onClick={()=>{nav("/mypage")}}>수정 완료</CompleteButton>
      </CompleteButtonContainer>
      <FooterContainer>
        <FooterText onClick={()=>{nav("/login")}}>로그아웃</FooterText>
        <FooterText>|</FooterText>
        <FooterText onClick={()=>{nav("/login")}}>회원탈퇴</FooterText>
      </FooterContainer>
      <NavigationBarWrapper>
        <NavigationBar />
      </NavigationBarWrapper>
    </Div>
  );
};

export default InfoEdit;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: white;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin: 2rem auto;
`;

interface ImgProps {
  imgsrc: string;
}

const ProfileImg = styled.div<ImgProps>`
  border-radius: 50%;
  background-image: url(${(props) => props.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 6rem;
  height: 6rem;
  margin: 1rem 0 1rem 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Nickname = styled.div`
  font-weight: 700;
  margin-left: 0;
`;

const Rate = styled.div`
  color: #003d62;
  background-color: #eae1e1;
  padding: 0.3rem 0.4rem;
  border-radius: 0.7rem;
  font-weight: 600;
  font-size: 0.8rem;
  margin: 0.5rem 0 0 0;
`;

const EditButton = styled.div<ImgProps>`
  background-image: url(${(props) => props.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-self: center;
  margin-right: 1rem;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
`;

const Title = styled.div`
  display: flex;
  font-weight: 700;
  margin-right: 1rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
`;

const NavigationBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-bottom: 1rem;
  margin-top: 1rem;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22rem;
`;

const FooterText = styled.div`
  font-size: 0.7rem;
  margin-right: 0.3rem;
  cursor: pointer;
  color: rgba(0, 61, 98, 1);
`;

const CompleteButton = styled.div`
  display:flex;
  justify-content : center;
  align-items: center;
  background-color: #6DAECA;
  cursor :pointer;
  padding: 0.5rem 1rem;
  border-radius : 10px;
  width : 9vw;
`;

const CompleteButtonContainer = styled.div`
  margin-top:10vh;
`;