//utils
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";

//components
import ArticleList from "../components/home/ArticleList";
import notification from "../assets/notification.svg";
// import Modal from "../components/home/Modal";
import Toggle from "../components/common/ToggleSwitch";

//apis
import { fetchUserPrefers } from "../api/user-controller";
import { fetchCategoryArticle } from "../api/user-controller";

const Test = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      console.log("이때 api 호출");
    }
  }, [inView]);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <Div>
      <Header>
        <Toggle isActive={isToggled} onToggle={handleToggle} />
        <Title>
          <Text>오늘의 뉴쓱</Text>
          <Icon />
        </Title>
        <CategoryList>
          <div>오예</div>
        </CategoryList>
      </Header>
      <Contents>
        <ArticleList />
        <div ref={ref}>안녕</div>
      </Contents>
    </Div>
  );
};

export default Test;

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
