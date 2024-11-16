import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.png";
import arrow_back from "../../assets/arrow_back.png";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSearch: (searchInput: string) => void;
  onCancel?: () => void; // 검색 취소 버튼
}

const SearchBar = ({
  searchInput,
  setSearchInput,
  onSearch,
  onCancel,
}: SearchBarProps) => {
  const handleSearchClick = () => {
    if (searchInput) {
      // 검색 기록 업데이트
      const existingHistory = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
      );
      const updatedHistory = [
        searchInput,
        ...existingHistory.filter((item) => item !== searchInput),
      ].slice(0, 5); // 최대 5개 유지

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

      // 검색 실행
      onSearch(searchInput);
    }
  };

  return (
    <Wrapper>
      {onCancel && <CancelButton onClick={onCancel} />}
      <SearchInput
        placeholder="오늘의 뉴-쓱"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SearchButton onClick={handleSearchClick} />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 30px;
  gap: 10px;
`;

const SearchInput = styled.input`
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

const CancelButton = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  background-image: url(${arrow_back});
  border: none;
  cursor: pointer;
`;

const SearchButton = styled.div`
  background-image: url(${searchIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.2rem;
  height: 1.2rem;
  justify-content: flex-start;
  cursor: pointer;
`;
