import styled from "styled-components";
import edit from "../../assets/edit.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "../../api/user-controller";
import tmp from "../../assets/rate/뉴싹.svg";
import { getHistory } from "../../api/user-controller";
import ArticleList from "../../components/home/ArticleList";
import { ArticleType } from "../../components/home/ArticleList";

interface UserInfoType {
  name: string;
  grade: string;
  days: number;
}

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>(); // Store user data
  const [history, setHistory] = useState<ArticleType[]>();
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, historyResponse] = await Promise.all([
          fetchUserInfo(),
          getHistory(),
        ]);

        if (userResponse.isSuccess) {
          setUserInfo(userResponse.result);
          localStorage.setItem("userName", userResponse.result.name);
        } else {
          console.log("Failed to fetch user info:", userResponse.message);
        }

        if (historyResponse) {
          setHistory(historyResponse.result);
        } else {
          console.log("Failed to fetch history:", historyResponse.message);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Div>
      <InfoContainer>
        <InfoWrapper>
          <ProfileImg src={tmp} />
          <Info>
            <Nickname>{userInfo?.name} 님</Nickname>
            <Rate>{userInfo?.grade} 등급</Rate>
          </Info>
          <EditButton
            imgsrc={edit}
            onClick={() => {
              nav("/mypage/edit");
            }}
          />
        </InfoWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => {
              nav("/mypage/notification");
            }}
          >
            알림 관리하기
          </Button>
          <Button
            onClick={() => {
              nav("/mypage/category");
            }}
          >
            관심 카테고리 관리하기
          </Button>
        </ButtonWrapper>
      </InfoContainer>
      <ReadingBadge>
        <Title>내 리딩 뱃지</Title>
        <BadgeWrapper>
          <BadgeImage src={tmp} />
          <Text>{userInfo?.days} 일 연속으로 뉴스를 읽었어요!</Text>
        </BadgeWrapper>
      </ReadingBadge>
      <HistorySection>
        <Title>기사 히스토리</Title>
        {history && history.length > 0 ? (
          <HistoryList>
            <ArticleList articleArray={history} />{" "}
          </HistoryList>
        ) : (
          <NoHistory>아직 읽은 기사가 없어요</NoHistory>
        )}
      </HistorySection>
    </Div>
  );
};

export default MyPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding: 0px 10px;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
  flex-grow: 1;
`;

const Nickname = styled.div`
  font-weight: 500;
  margin-left: 0;
`;

const Text = styled.div`
  font-weight: 500;
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

interface ImgProps {
  imgsrc: string;
}

const EditButton = styled.div<ImgProps>`
  background-image: url(${(props) => props.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-self: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.div`
  background-color: rgba(0, 61, 98, 1);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 12px;
  cursor: pointer;
`;

const ReadingBadge = styled.div`
  flex: 0 0 auto; /* Fixed height */
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1rem 0;
`;

const Title = styled.div`
  color: #003d62;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BadgeImage = styled(ProfileImg)`
  width: 4rem;
  height: 4rem;
  margin: 1rem 1rem 1rem 2rem;
`;

const HistorySection = styled.div`
  flex: 1 1 auto; /* Fill remaining space */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 1rem;
  padding-bottom: 3rem;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  font-size: 14px;
  padding: 20px;
`;
