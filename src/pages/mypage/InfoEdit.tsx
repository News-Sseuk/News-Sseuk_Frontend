import styled from "styled-components";
import rate1 from "../../assets/rate/1.svg";
import edit from "../../assets/edit.png";
import { useNavigate } from "react-router-dom";
import { fetchSignOut } from "../../api/user-controller";

const InfoEdit = () => {
  const nav = useNavigate();

  const handleLogOutClick = async () => {
    const result = await fetchSignOut();
    if (result) {
      alert("로그아웃 되었습니다.");
      nav("/");
    } else {
      alert("다시 시도해주세요");
    }
  };

  return (
    <Div>
      <InfoWrapper>
        <ProfileImg>
          <Img src={rate1} />
        </ProfileImg>
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
      <CompleteButton>수정 완료</CompleteButton>
      <FooterContainer>
        <FooterText onClick={handleLogOutClick}>로그아웃</FooterText>
        <FooterText>|</FooterText>
        <FooterText
          onClick={() => {
            nav("/login");
          }}
        >
          회원탈퇴
        </FooterText>
      </FooterContainer>
    </Div>
  );
};

export default InfoEdit;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
  justify-content: center;
  align-items: center;
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

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin: 1rem 0 1rem 1rem;
`;

const Img = styled.img`
  width: 80%;
  height: 80%;
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
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const EditWrapper = styled.div`
  display: flex;
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
  outline: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6daeca;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  width: 80%;
  margin-top: 30px;
`;
