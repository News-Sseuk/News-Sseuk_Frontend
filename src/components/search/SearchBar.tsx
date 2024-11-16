import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.png";
import arrow_back from "../../assets/arrow_back.png";
import { useState } from "react";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSearch: (input: string) => void;
  onCancel?: () => void; // 검색 취소 버튼 동작
}

const SearchBar = ({
  searchInput,
  setSearchInput,
  onSearch,
  onCancel,
}: SearchBarProps) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setIsSearching(true);
  };

  return (
    <Wrapper>
      {isSearching && onCancel && <CancelButton onClick={onCancel} />}
      <SearchInput
        placeholder="오늘의 뉴-쓱"
        value={searchInput}
        onChange={handleInputChange}
        onFocus={() => setIsSearching(true)}
      />
      <SearchButton onClick={() => onSearch(searchInput)} />
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
