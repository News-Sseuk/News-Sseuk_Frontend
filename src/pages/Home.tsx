import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import ArticleCard from "../components/ArticleCard";
import notification from "../assets/notification.svg";
import CategoryButton from "../components/home/CategoryButton";
import { useState } from "react";
import Modal from "../components/home/Modal";

const Home = () => {
  const objectList = [
    {
      title: "5월 7일, 서윤 님을 위한 오늘의 뉴-쓱",
      content: "현재 가족의 모습 달라졋다... 국민 눈높이 새 입법 국회에 맡겨",
      date: "2024.04.25 19:18",
      tagList: ["국내법", "헌법재판소"],
    },
    {
      title: "시스템 점검 안내",
      content: "2024년 7월 10일(수) 00:00~03:00까지 시스템 점검이 진행됩니다.",
      date: "2024.04.25 19:18",
      tagList: ["국내법", "헌법재판소"],
    },
  ];

  const dummyCategory = ["UX/UI", "국내법", "영화", "일본드라마"];
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleAlarmClick = () => {
    setShowModal(!showModal);
  };

  return (
    <Div>
      <Modal
        objectList={objectList}
        show={showModal}
        onClose={handleAlarmClick}
      />
      <Header>
        <Title>
          <Text>
            {date.getMonth() + 1}월 {date.getDate()}일, 오늘의 뉴쓱
          </Text>
          <Icon onClick={handleAlarmClick} />
        </Title>
        <CategoryList>
          {dummyCategory.map((category) => (
            <CategoryButton
              key={dummyCategory.indexOf(category)}
              category={category}
            />
          ))}
        </CategoryList>
      </Header>
      <Contents>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Contents>
      <NavigationBarWrapper>
        <NavigationBar />
      </NavigationBarWrapper>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: #003d62;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-start;
  font-weight: 600;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${notification});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 8rem;
  cursor: pointer;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  width: 80vw;
  height: 6vh;
  margin-top: 10px;
`;

const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100vw;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 4rem;
`;

const NavigationBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 90vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
