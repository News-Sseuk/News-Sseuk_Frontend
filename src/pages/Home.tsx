//utils
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";

//components
import notification from "../assets/notification.svg";
import CategoryButton from "../components/home/CategoryButton";
// import Modal from "../components/home/Modal";
import ArticleList from "../components/home/ArticleList";

//apis
import { fetchCategoryArticle } from "../api/user-controller";

//atom

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [articleArray, setArticleArray] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [cursorTime, setCursorTime] = useState("");

  const nav = useNavigate();
  const { category } = useParams();
  console.log(category);
  const categoryList = JSON.parse(localStorage.getItem("category"));

  // url 변경시 (category 클릭시) 해당 카테고리 기사 가져오는 api
  useEffect(() => {
    const fetchArticles = async () => {
      const cursortime = new Date().toISOString();
      const decodedCategory = decodeURIComponent(category);
      console.log("decodedCategory", decodedCategory);
      if (category) {
        const articles = await fetchCategoryArticle({
          category: decodedCategory,
          cursortime,
        });
        setArticleArray(articles);
        console.log(articles);
      }
    };
    fetchArticles();
  }, [category]);

  const handleCategoryClick = (newCategory: string) => {
    nav(`/home/${encodeURIComponent(newCategory)}`); // URL 변경
  };

  useEffect(() => {
    if (inView) {
      console.log("cur category : ", category);
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
          {categoryList.map((cat, index) => (
            <CategoryButton
              key={index}
              category={cat}
              isClicked={cat === category}
              handleClick={handleCategoryClick}
            />
          ))}
        </CategoryList>
      </Header>
      <Contents>
        <ArticleList articleArray={articleArray} />
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
  justify-content: center;
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
