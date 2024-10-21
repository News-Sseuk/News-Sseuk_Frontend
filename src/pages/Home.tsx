import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import notification from "../assets/notification.svg";
import CategoryButton from "../components/home/CategoryButton";
import { useState, useRef } from "react";
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
    handleOpenModal();
  };

  const dialogRef = useRef();

  const handleOpenModal = () => {
    dialogRef.current.showModal();
  };

  const handleCloseModal = () => {
    dialogRef.current.close();
  };

  return (
    <Div>
      <dialog ref={dialogRef}>
        <Modal
          objectList={objectList}
          show={showModal}
          handleCloseModal={handleCloseModal}
        />
      </dialog>

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
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #003d62;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${notification});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  width: 100%;
  height: 20%;
  margin-top: 10px;
  padding: 22px 10px;
`;

const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
