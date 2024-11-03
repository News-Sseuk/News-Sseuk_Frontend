import rate1 from "../assets/rate/뉴싹.svg";
import rate2 from "../assets/rate/쓱싹.svg";
import rate3 from "../assets/rate/싹싹.svg";

/**
 * 서버에서 받은 등급 문자열에 해당하는 이미지를 반환하는 함수
 * @param {string} grade - 서버에서 받은 등급 문자열 (뉴쓱, 쓱싹, 싹싹)
 * @returns {string} - 등급에 해당하는 이미지 경로
 */
export const getImage = (grade: string) => {
  switch (grade) {
    case "뉴쓱":
      return rate1;
    case "쓱싹":
      return rate2;
    case "싹싹":
      return rate3;
    default:
      return null; // 혹은 기본 이미지 경로
  }
};
