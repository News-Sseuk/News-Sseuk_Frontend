import { useState, useEffect, useCallback } from "react";

//props type 정의 있으면 좋겠다 ~!

// 초기 값, 유효성 검사 함수를 받음
const useInput = (initValue = "", rule) => {
  const [value, setValue] = useState(initValue);
  const [valid, setValid] = useState("");
  const onChange = useCallback((e) => {
    setValue(() => e.target.value);
  }, []);
  // value가 변경되면 유효성 검사하기
  useEffect(() => {
    if (rule) {
      setValid(() => rule(value));
    }
  }, [value]);
  return {
    value,
    setValue,
    onChange,
    valid,
  };
};

export default useInput;
