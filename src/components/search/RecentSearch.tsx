import styled from "styled-components";
import { useEffect } from "react";

const RecentSearch = () => {
  const dummyList = ["최근검색어 1", "최근검색어2", "최근검색어3", "4", "5"];
  useEffect(() => {
    //localStorage에서 최근 검색어 가져와서 렌더링
  }, []);

  //text 클릭 시 해당 검색어로 api 연결 로직

  // x 클릭 시, localStorage에서 삭제,

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
