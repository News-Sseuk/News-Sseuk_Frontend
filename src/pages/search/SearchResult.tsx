import { useEffect, useState } from "react";
import styled from "styled-components";
import Toggle from "../../components/common/ToggleSwitch";
import ArticleList from "../../components/home/ArticleList";
import { fetchSearch } from "../../api/user-controller";
import type { searchApiInterface } from "../../api/user-controller";
import { getCursorTime } from "../../utils/get-cursor-time";
import type { ArticleType } from "../../components/home/ArticleList";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/search/SearchBar";

const SearchResult = () => {
  const { searchQuery } = useParams<{ searchQuery: string }>(); // searchQuery를 명시적으로 정의
  const [searchInput, setSearchInput] = useState(searchQuery || "");
  const [isFiltered, setIsFiltered] = useState(false); // 필터링 on/off
  const [date, setDate] = useState(getFormattedDate());
  const [number, setNumber] = useState(0);
  const [isLatest, setIsLatest] = useState(true); // 최신순 / 신뢰도순
  const [articles, setArticles] = useState<ArticleType[]>([]); // 검색 결과

  const handleToggle = () => setIsFiltered((prev) => !prev);

  const handleOrder = (isLatestOrder: boolean) => setIsLatest(isLatestOrder);

  const handleSearchClick = (searchInput: string) => {
    console.log("검색 실행:", searchInput);
    // 필요하면 검색 로직 추가
  };

  useEffect(() => {
    console.log("searchQuery :>> ", searchQuery);
    setDate(getFormattedDate()); // 날짜 업데이트

    // 필터 상태와 정렬 기준 변경 시 검색 API 호출
    const fetchSearchResults = async () => {
      if (!searchQuery) return; // searchQuery가 없으면 종료
      const searchParams: searchApiInterface = {
        keyword: searchQuery,
        onOff: isFiltered ? "on" : "off",
        sort: isLatest ? "latest" : "reliable",
        cursorTime: getCursorTime(),
      };

      try {
        const result = await fetchSearch(searchParams);
        if (result) {
          setArticles(result.data);
          setNumber(result.data.length);
        }
      } catch (error) {
        console.error("검색 결과를 불러오는 중 오류 발생:", error);
        setArticles([]);
        setNumber(0);
      }
    };

    fetchSearchResults();
  }, [isFiltered, isLatest, searchQuery]);

  return (
    <Container>
      <HeaderWrapper>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={handleSearchClick}
        />
        <Header>
          <SearchText>"{searchQuery}"</SearchText>
          <Toggle isActive={isFiltered} onToggle={handleToggle}></Toggle>
        </Header>
        <Footer>
          <InfoText>
            {date} 기준 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 관련기사 {number}개
          </InfoText>
          <OrderContainer>
            <Order
              onClick={() => handleOrder(true)}
              isActive={isLatest === true}
            >
              최신순
            </Order>
            <Order
              onClick={() => handleOrder(false)}
              isActive={isLatest === false}
            >
              신뢰도순
            </Order>
          </OrderContainer>
        </Footer>
      </HeaderWrapper>
      <ArticleList articleArray={articles} />
    </Container>
  );
};

export default SearchResult;

const getFormattedDate = () => {
  const currentDate = new Date();
  return `${currentDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })} ${currentDate.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })}`;
};

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
