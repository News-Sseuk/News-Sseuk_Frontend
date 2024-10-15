import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";
import { useState, useEffect } from "react";
import searchIcon from "../../assets/searchIcon.png";
import arrow_back from "../../assets/arrow_back.png";
import { fetchTrendingKeyWords } from "../../api/user-controller";
import RecentSearch from "../../components/search/RecentSearch";

const Search = () => {
  const [isSearching, setSearching] = useState(false);
  const [trendingKeywords, setTrendingKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //mount 시 trending keywords
    async function fetchKeywords() {
      const data = await fetchTrendingKeyWords();
      setTrendingKeywords(data);
      console.log(data);
    }
    fetchKeywords();
  }, []);

  const handleSearchClick = () => {
    if (!isSearching) {
      return;
    }
    if (isSearching && searchInput) {
      console.log("search clicked");
      // 검색 api 연결, local Storage에 검색어 저장
    }
  };

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
  };

  return (
    <Div>
      <Header>
        <SearchBarWrapper>
          {isSearching && <Button onClick={() => setSearching(false)} />}
          <SearchBar
            placeholder={" 오늘의 뉴-쓱"}
            value={searchInput}
            onClick={() => setSearching(true)}
            onChange={handleSearchChange}
          />
          <Icon onClick={handleSearchClick} />
        </SearchBarWrapper>
        {isSearching && <RecentSearch />}
        {!isSearching && (
          <NotSearching>
            <KeywordSection>
              <Title>지금 뜨는 뉴쓱</Title>
              <KeywordList>
                {trendingKeywords?.map((keyword) => (
                  <RecommendTag key={keyword}>{keyword}</RecommendTag>
                ))}
              </KeywordList>
            </KeywordSection>
          </NotSearching>
        )}
      </Header>
      <Contents>
        {!isSearching && (
          <RecommendSection>
            <StickyTitle>00님을 위한 추천</StickyTitle>
            <RecommendList>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </RecommendList>
          </RecommendSection>
        )}
      </Contents>
    </Div>
  );
};

export default Search;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10px;
`;

const Header = styled.div`
  flex: 0 0 auto; /* Fixed height */
  margin: 10px;
`;

const Contents = styled.div`
  flex: 1 1 auto; /* Fill remaining space and allow shrinking */
  overflow-y: auto; /* Enable vertical scrolling */
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
  justify-content: flex-start;
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
  height: calc(100vh - 25vh); /* Adjust the height accordingly */
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
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0.4rem;
  font-weight: 600;
  font-size: 0.8rem;
`;
