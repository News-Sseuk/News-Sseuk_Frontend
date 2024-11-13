export const getCursorTime = () => {
  const localDate = new Date();
  const timezoneOffset = localDate.getTimezoneOffset() * 60000; // 오프셋을 밀리초로 변환
  const localISOTime = new Date(
    localDate.getTime() - timezoneOffset
  ).toISOString();
  return localISOTime;
};
