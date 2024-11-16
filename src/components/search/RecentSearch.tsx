import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";

const RecentSearch = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // 로컬 스토리지에서 검색 기록 가져오기 및 초기화
  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );
    // 데이터가 배열인지 확인
    if (Array.isArray(storedHistory)) {
      setSearchHistory(storedHistory);
    } else {
      setSearchHistory([]); // 배열이 아닌 경우 빈 배열로 초기화
    }
  }, []);

  // 검색어 삭제
  const handleDelete = useCallback(
    (itemToDelete: string) => {
      const updatedHistory = searchHistory.filter(
        (item) => item !== itemToDelete
      );
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    },
    [searchHistory]
  );

  // 검색어 클릭 시 API 연결
  const handleSearchClick = useCallback((item: string) => {
    console.log(`검색어: ${item}로 API 호출`); // API 호출 로직 추가
  }, []);

  return (
    <Searching>
      <Title>최근 검색어</Title>
      {searchHistory.map((item) => (
        <RecentSearched key={item}>
          <Text onClick={() => handleSearchClick(item)}>{item}</Text>
          <DeleteButton onClick={() => handleDelete(item)}>X</DeleteButton>
        </RecentSearched>
      ))}
    </Searching>
  );
};

export default RecentSearch;

const Searching = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  color: #003d62;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 1rem;
`;

const RecentSearched = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin: 0.1rem 0 0 0;
`;

const Text = styled.div`
  color: #003d62;
  font-weight: 600;
  font-size: 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const DeleteButton = styled.div`
  font-size: 12px;
  font-weight: 900;
  justify-content: flex-end;
  margin: 1rem;
  cursor: pointer;
`;
