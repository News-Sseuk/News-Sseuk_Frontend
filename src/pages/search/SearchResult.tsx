import { useEffect, useState } from "react";
import styled from "styled-components";
import Toggle from "../../components/common/ToggleSwitch";
import ArticleList from "../../components/home/ArticleList";
import { fetchSearch } from "../../api/user-controller";
import type { searchApiInterface } from "../../api/user-controller";

const SearchResult = ({ searchQuery }: { searchQuery: string }) => {
  const [filterState, setFilterState] = useState(false);
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [isLatestOrder, setIsLatestOrder] = useState("최신순");
  const [articles, setArticles] = useState([]);

  const handleToggle = () => {
    setFilterState(!filterState);
  };

  const handleOrder = (state: string) => {
    setIsLatestOrder(state);
  };

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

    // 필터 상태와 정렬 기준 변경 시 검색 API 호출
    const fetchSearchResults = async () => {
      const searchParams: searchApiInterface = {
        keyword: searchQuery,
        onOff: filterState ? "on" : "off",
        sort: isLatestOrder === "최신순" ? "latest" : "reliable",
        cursorTime: formattedDate,
      };

      const result = await fetchSearch(searchParams);
      if (result) {
        setArticles(result.data); // 예시로 데이터 설정
        setNumber(result.data.length);
      }
    };

    fetchSearchResults();
  }, [filterState, isLatestOrder, searchQuery]);

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <SearchText>"{searchQuery}"</SearchText>
          <Toggle isActive={filterState} onToggle={handleToggle}></Toggle>
        </Header>
        <Footer>
          <InfoText>
            {date} 기준 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 관련기사 {number}개
          </InfoText>
          <OrderContainer>
            <Order
              onClick={() => handleOrder("최신순")}
              isActive={isLatestOrder === "최신순"}
            >
              최신순
            </Order>
            <Order
              onClick={() => handleOrder("신뢰도순")}
              isActive={isLatestOrder === "신뢰도순"}
            >
              신뢰도순
            </Order>
          </OrderContainer>
        </Footer>
      </HeaderWrapper>
      <ArticleList articles={articles} />
    </Container>
  );
};

export default SearchResult;

// 스타일 컴포넌트들은 기존과 동일

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

const Order = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#000000" : "#00000033")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: pointer;
`;
