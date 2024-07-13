import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
import searchIcon from "../assets/searchIcon.png";
import arrow_back from "../assets/arrow_back.png";

const Search = () => {
  const [isSearching, setSearching] = useState(false);
  const dummyList = [
    "헌법재판소",
    "김밥",
    "컵라면",
    "인디고 출력",
    "블록체인",
    "메타버스",
    "비트코인",
    "고양이",
  ];

  return (
    <Div>
      <Header>
        <SearchBarWrapper>
          <Icon />
          <SearchBar
            placeholder={" 오늘의 뉴쓱"}
            onClick={() => setSearching(true)}
          />
          {isSearching && <Button onClick={() => setSearching(false)} />}
        </SearchBarWrapper>
        {isSearching && (
          <Searching>
            <Title>최근 검색어</Title>
            <RecentSearched>
              <Text>최근검색어text</Text>
              <DeleteButton>X</DeleteButton>
            </RecentSearched>
            <RecentSearched>
              <Text>최근검색어text</Text>
              <DeleteButton>X</DeleteButton>
            </RecentSearched>
            <RecentSearched>
              <Text>최근검색어text</Text>
              <DeleteButton>X</DeleteButton>
            </RecentSearched>
          </Searching>
        )}
        {!isSearching && (
          <NotSearching>
            <KeywordSection>
              <Title>지금 뜨는 뉴쓱</Title>
              <KeywordList>
                {dummyList.map((keyword) => (
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
      <NavigationBarWrapper>
        <NavigationBar />
      </NavigationBarWrapper>
    </Div>
  );
};

export default Search;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: white;
`;

const Header = styled.div`
  flex: 0 0 auto; /* Fixed height */
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
  margin: 0 0 2rem 0;
`;

const SearchBar = styled.input`
  justify-content: flex-start;
  border: none;
  border-bottom: 2px solid #003d62;
  width: 30vw;
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
  background-color: white;
  z-index: 10;
  padding-left: 1rem;
  margin: 0;
  width: 100vw;
  height: 2rem;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Searching = styled.div``;

const RecentSearched = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0.1rem 0 0 0;
`;

const Text = styled.div`
  color: #003d62;
  font-weight: 600;
  font-size: 0.8rem;
  margin-left: 1rem;
`;

const DeleteButton = styled.div`
  font-size: 0.8rem;
  justify-content: flex-end;
  margin: 1rem;
  cursor: pointer;
`;

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
  margin: 0 1rem;
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

const NavigationBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
