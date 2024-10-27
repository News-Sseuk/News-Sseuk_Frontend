import { useState, useEffect, useCallback } from "react";

type UseInputProps = {
  initValue?: string;
  rule?: (value: string) => string;
};

// 초기 값과 유효성 검사 함수를 받는 커스텀 훅
const useInput = ({ initValue = "", rule }: UseInputProps) => {
  const [value, setValue] = useState(initValue);
  const [valid, setValid] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  // value가 변경되면 유효성 검사하기
  useEffect(() => {
    if (rule) {
      setValid(rule(value));
    }
  }, [value, rule]);

  return {
    value,
    setValue,
    onChange,
    valid,
  };
};

export default useInput;
