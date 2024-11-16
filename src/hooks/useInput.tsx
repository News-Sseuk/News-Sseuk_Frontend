import { useState, useEffect, useCallback } from "react";

type UseInputProps = {
  initValue?: string;
  rule?: (value: string) => string | undefined;
};

const useInput = ({ initValue = "", rule }: UseInputProps) => {
  const [value, setValue] = useState(initValue);
  const [valid, setValid] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (rule) {
      setValid(rule(value) || ""); // rule의 결과가 undefined일 경우 빈 문자열로 설정
    }
  }, [value, rule]); // `rule` 추가

  return {
    value,
    setValue,
    onChange,
    valid,
  };
};

export default useInput;
