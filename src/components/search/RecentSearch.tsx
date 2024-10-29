import styled from "styled-components";
import { useEffect } from "react";

type RecentSearchProps = {
  searchQuery: string;
};
const RecentSearch = ({ searchQuery }: RecentSearchProps) => {
  const dummyList = ["최근검색어 1", "최근검색어2", "최근검색어3", "4", "5"];
  useEffect(() => {
    // 로컬 스토리지에서 검색 기록 가져오기
    const storedHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];

    // 중복 검색어 제거 후 최신 검색어 추가
    const updatedHistory = [
      searchQuery,
      ...storedHistory.filter((item) => item !== searchQuery),
    ];

    // 최대 5개까지만 저장
    if (updatedHistory.length > 5) {
      updatedHistory.pop();
    }

    // 업데이트된 검색 기록을 로컬 스토리지에 저장
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    console.log(storedHistory);
  }, []);

  //text 클릭 시 해당 검색어로 api 연결 로직

  // x 클릭 시, localStoragehttps://blog.naver.com/dtb08213/223635970759에서 삭제,

  return (
    <Searching>
      <Title>최근 검색어</Title>
      {dummyList?.map((item) => (
        <RecentSearched>
          <Text>{item}</Text>
          <DeleteButton>X</DeleteButton>
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
