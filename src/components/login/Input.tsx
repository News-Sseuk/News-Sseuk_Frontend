import React from "react";
import styled from "styled-components";

const Input = ({
  id = `${Math.floor(Math.random() * 10000 + 1)}`,
  type = "text",
  value = "",
  onChange,
  label = "",
  placeholder = "",
  disabled = false,
  valid = "", // 유효성 검사 결과
}) => {
  return (
    <div>
      <Wrapper>
        <Text>{label}</Text>
        <StyledInput
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </Wrapper>
      <Error>{valid}</Error>
    </div>
  );
};

export default React.memo(Input);

const StyledInput = styled.input`
  padding: 3px 5px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  outline: none;
  &::placeholder {
    font-size: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.label`
  font-size: 10px;
`;

const Error = styled.p`
  font-size: 10px;
  margin: 5px 0 0 36px;
  color: red;
`;
