export const getCursorTime = (): string => {
  const localDate = new Date();
  const timezoneOffset = localDate.getTimezoneOffset() * 60000; // 오프셋을 밀리초로 변환
  const localISOTime = new Date(
    localDate.getTime() - timezoneOffset
  ).toISOString();
  return localISOTime;
};

export const getTime = () => {
  const date = new Date();

  const formattedDate = date.toISOString().split("T")[0];
  const formattedTime = date.toTimeString().split(" ")[0];

  return `${formattedDate}${formattedTime}`;
};
