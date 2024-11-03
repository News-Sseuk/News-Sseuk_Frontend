//utils
import styled from "styled-components";
import { useState, useEffect } from "react";

//assets
import searchIcon from "../../assets/searchIcon.png";
import arrow_back from "../../assets/arrow_back.png";

//api
import {
  fetchTrendingKeyWords,
  fetchRecordRecommend,
} from "../../api/user-controller";

//component
import RecentSearch from "../../components/search/RecentSearch";
import SearchResult from "./SearchResult";
import ArticleList from "../../components/home/ArticleList";

const SEARCH_STATUS = {
  IDLE: "IDLE", // 검색 전
  SEARCHING: "SEARCHING", // 검색 중
  RESULT: "RESULT", // 검색 후
};

const Search = () => {
  const [searchStatus, setSearchStatus] = useState(SEARCH_STATUS.IDLE); // 검색 상태 관리
  const [trendingKeywords, setTrendingKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchKeywords() {
      setLoading(true);
      const data = await fetchTrendingKeyWords();
      setTrendingKeywords(data.trending);
      setUserName(data.name);
      setLoading(false);
    }
    fetchKeywords();
  }, []);

  // const handleSearchClick = async () => {
  //   if (searchInput) {
  //     const searchOptions = {keyword : searchInput, onOff: }
  //     const response = await fetchSearch()

  //     // 검색 상태 업데이트
  //     setSearchStatus(SEARCH_STATUS.RESULT);
  //   }
  // };

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    setSearchStatus(SEARCH_STATUS.SEARCHING);
  };

  return (
    <Div>
      <Header>
        <SearchBarWrapper>
          {searchStatus === SEARCH_STATUS.SEARCHING && (
            <Button onClick={() => setSearchStatus(SEARCH_STATUS.IDLE)} />
          )}
          <SearchBar
            placeholder=" 오늘의 뉴-쓱"
            value={searchInput}
            onClick={() => setSearchStatus(SEARCH_STATUS.SEARCHING)}
            onChange={handleSearchChange}
          />
          <Icon onClick={handleSearchClick} />
        </SearchBarWrapper>

        {/* 검색 상태에 따른 렌더링 */}
        {searchStatus === SEARCH_STATUS.SEARCHING && <RecentSearch />}
        {searchStatus === SEARCH_STATUS.IDLE && (
          <NotSearching>
            <KeywordSection>
              <Title>지금 뜨는 뉴쓱</Title>
              {loading ? (
                <LoadingText>로딩 중...</LoadingText>
              ) : (
                <KeywordList>
                  {trendingKeywords?.map((keyword) => (
                    <RecommendTag key={keyword}>{keyword}</RecommendTag>
                  ))}
                </KeywordList>
              )}
            </KeywordSection>
          </NotSearching>
        )}
      </Header>

      <Contents>
        {/* 추천 섹션 */}
        {searchStatus === SEARCH_STATUS.IDLE && (
          <RecommendSection>
            <StickyTitle>{userName} 님을 위한 추천</StickyTitle>
            <RecommendList></RecommendList>
          </RecommendSection>
        )}

        {/* 검색 결과 */}
        {searchStatus === SEARCH_STATUS.RESULT && (
          <SearchResult searchQuery={searchInput} />
        )}
      </Contents>
    </Div>
  );
};

export default Search;

// 스타일 컴포넌트들...

const LoadingText = styled.div`
  text-align: center;
  color: #003d62;
  font-weight: 600;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10px;
`;

const Header = styled.div`
  flex: 0 0 auto;
  margin: 10px;
`;

const Contents = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 30px;
  gap: 10px;
`;

const SearchBar = styled.input`
  border: none;
  border-bottom: 2px solid #003d62;
  width: 100%;
  margin: 0 0.5rem;
  height: 4vh;
  outline: none;
  &::placeholder {
    color: rgba(0, 61, 98, 0.5);
    font-weight: 600;
  }
`;

const KeywordSection = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  color: #003d62;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 1rem;
`;

const StickyTitle = styled(Title)`
  position: sticky;
  top: 0;
  z-index: 10;
  padding-left: 1rem;
  margin: 0;
  width: 100vw;
  height: 2rem;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const RecommendSection = styled.div`
  margin-bottom: 4rem;
`;

const RecommendList = styled.div`
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
  height: calc(100vh - 25vh);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NotSearching = styled.div``;

const Button = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  background-image: url(${arrow_back});
  border: none;
  cursor: pointer;
`;

const Icon = styled.div`
  background-image: url(${searchIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.2rem;
  height: 1.2rem;
  justify-content: flex-start;
`;

const RecommendTag = styled.span`
  display: flex;
  justify-content: space-between;
  color: #003d62;
  background-color: #eae1e1;
  padding: 0.3rem 0.4rem;
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
  margin: 0.4rem;
  font-weight: 600;
  font-size: 0.8rem;
`;
