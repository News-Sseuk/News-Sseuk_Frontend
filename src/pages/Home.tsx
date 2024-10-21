import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import notification from "../assets/notification.svg";
import CategoryButton from "../components/home/CategoryButton";
import { useState, useRef, useEffect } from "react";
import Modal from "../components/home/Modal";
import { useInView } from "react-intersection-observer";
import { fetchUserPrefers } from "../api/user-controller";

// api 순서
// 홈 navgiate => api로 받아와서 해당 사용자의 관심 카테고리를 저장
// 카테고리를 렌더
// 해당 카테고리 클릭시에 기사 get api 호출
// default : 카테고리 배열 중 index 0 인 애 호출
// 마지막 기사 보일 떄, 해당 id -> 백에 넘겨서 새로운 기사들을 받아야 함

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [categories, setCategories] = useState([]); // State to hold categories
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const prefer = await fetchUserPrefers();
      console.log(prefer);
      if (prefer && prefer.result) {
        setCategories(prefer.result); // Assuming result contains the category array
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (inView) {
      console.log("이때 api 호출");
    }
  }, [inView]);

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
        {/* <Modal
          objectList={objectList}
          show={showModal}
          handleCloseModal={handleCloseModal}
        /> */}
      </dialog>

      <Header>
        <Title>
          <Text>
            {date.getMonth() + 1}월 {date.getDate()}일, 오늘의 뉴쓱
          </Text>
          <Icon onClick={handleAlarmClick} />
        </Title>
        <CategoryList>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <CategoryButton
                key={index}
                category={category}
                isClicked={index === 0}
              />
            ))
          ) : (
            <p>카테고리를 불러오는 중...</p>
          )}
        </CategoryList>
      </Header>
      <Contents>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <div ref={ref}>안녕</div>
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
  gap: 10px;
  align-items: center;
  border-top: 0.5px solid ${({ theme }) => theme.colors.main};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.main};
  width: 100%;
  height: 20%;
  margin-top: 10px;
  padding: 24px 10px;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
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
