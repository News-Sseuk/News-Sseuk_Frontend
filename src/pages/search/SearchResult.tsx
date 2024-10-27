import styled from "styled-components";
import Toggle from "../../components/common/ToggleSwitch";
import { useEffect, useState } from "react";
import ArticleList from "../../components/home/ArticleList";

const SearchResult = () => {
  const [filterState, setFilterState] = useState(false);
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [isLatestOrder, setIsLatestOrder] = useState("최신순");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })} ${currentDate.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`;
    setDate(formattedDate);

    // 검색 결과 api
  }, []);

  const handleToggle = () => {
    setFilterState(!filterState);
  };

  const handleOrder = (state: string) => {
    setIsLatestOrder(state);
    console.log(isLatestOrder);
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <SearchText>"한강 위 고양이"</SearchText>
          <Toggle isActive={filterState} onToggle={handleToggle}></Toggle>
        </Header>
        <Footer>
          <InfoText>
            {date} 기준 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 관련기사 {number}개
          </InfoText>
          <OrderContainer>
            <Order
              onClick={() => {
                handleOrder("최신순");
              }}
            >
              최신순
            </Order>
            <Order
              onClick={() => {
                handleOrder("신뢰도순");
              }}
            >
              신뢰도순
            </Order>
          </OrderContainer>
        </Footer>
      </HeaderWrapper>
      <ArticleList />
    </Container>
  );
};

export default SearchResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  gap: 15px;
`;

const Header = styled.div`
  display: flex;
  gap: 26px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchText = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const InfoText = styled.div`
  font-size: 10px;
  font-weight: 400;
  line-height: 16.5px;
`;

const OrderContainer = styled.div`
  display: flex;
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  gap: 10px;
`;

const Order = styled.div``;
