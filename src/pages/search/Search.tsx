import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/spinner.gif";

//api
import {
  fetchTrendingKeyWords,
  fetchRecordRecommend,
} from "../../api/user-controller";

//component
import RecentSearch from "../../components/search/RecentSearch";
import ArticleList from "../../components/home/ArticleList";
import SearchBar from "../../components/search/SearchBar";
import Loading from "../Loading";

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
  const [recommend, setRecommend] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [keywordsData, recommendData] = await Promise.all([
          fetchTrendingKeyWords(),
          fetchRecordRecommend(),
        ]);

        setTrendingKeywords(keywordsData.result.trending || []);
        setUserName(keywordsData.result.name || "");
        setRecommend(recommendData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearchClick = (searchInput) => {
    if (searchInput) {
      const existingHistory = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
      );
      const updatedHistory = [
        searchInput,
        ...existingHistory.filter((item) => item !== searchInput),
      ].slice(0, 5);

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

      setSearchStatus(SEARCH_STATUS.RESULT);
      nav(`/search/${searchInput}`, { replace: true });
    }
  };

  const handleKeywordClick = (keyword: string) => {
    nav(`/search/${keyword}`);
  };

  return (
    <Div>
      {loading ? <Loading /> : null}
      <Header>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={handleSearchClick}
          onCancel={() => setSearchStatus(SEARCH_STATUS.IDLE)}
        />
        {searchStatus === SEARCH_STATUS.SEARCHING && <RecentSearch />}
        {searchStatus === SEARCH_STATUS.IDLE && (
          <NotSearching>
            <KeywordSection>
              <Title>지금 뜨는 뉴쓱</Title>
              {loading ? (
                <LoadingText>
                  <img src={Spinner} width={"20px"} />
                </LoadingText>
              ) : (
                <KeywordList>
                  {trendingKeywords.map((keyword) => (
                    <RecommendTag
                      key={keyword}
                      onClick={() => {
                        handleKeywordClick(keyword);
                      }}
                    >
                      {keyword}
                    </RecommendTag>
                  ))}
                </KeywordList>
              )}
            </KeywordSection>
          </NotSearching>
        )}
      </Header>

      <Contents>
        {searchStatus === SEARCH_STATUS.IDLE && (
          <RecommendSection>
            <StickyTitle>{userName} 님을 위한 추천</StickyTitle>
            <RecommendList>
              {recommend.length > 0 ? (
                <ArticleList articleArray={recommend} />
              ) : (
                <NoHistory>더 많은 기사를 읽어보세요</NoHistory>
              )}
            </RecommendList>
          </RecommendSection>
        )}
      </Contents>
    </Div>
  );
};

export default Search;

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

const Contents = styled.div``;

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
  margin: 0;
  width: 100%;
  height: 2rem;
  padding: 0px 12px;
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

const NoHistory = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 20px;
`;
