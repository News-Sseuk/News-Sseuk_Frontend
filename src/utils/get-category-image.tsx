import economy from "../assets/category/economy.png";
import culture from "../assets/category/culture.png";
import environment from "../assets/category/environment.png";
import labor from "../assets/category/labor.png";
import life from "../assets/category/life.png";
import politics from "../assets/category/politic.png";
import rights from "../assets/category/rights.png";
import society from "../assets/category/society.png";
import tech from "../assets/category/tech.png";
import world from "../assets/category/world.png";

// 세부 카테고리와 대분류 매핑
const categoryMapping: { [key: string]: string } = {
  // 정치
  대통령실: "politics",
  "국회/정당": "politics",
  북한: "politics",
  행정: "politics",
  "국방/외교": "politics",
  정치일반: "politics",

  // 경제
  금융: "economy",
  증권: "economy",
  "산업/재계": "economy",
  "중기/벤처": "economy",
  부동산: "economy",
  "글로벌 경제": "economy",
  생활경제: "economy",
  "경제 일반": "economy",

  // 환경
  환경: "environment",

  // 노동
  노동: "labor",

  // 생활
  건강정보: "life",
  "자동차/시승기": "life",
  "도로/교통": "life",
  "여행/레저": "life",
  "음식/맛집": "life",
  "패션/뷰티": "life",
  날씨: "life",
  "생활문화 일반": "life",

  // 문화
  "공연/전시": "culture",
  책: "culture",
  종교: "culture",

  // 인권
  "인권/복지": "rights",

  // 사회
  사건사고: "society",
  교육: "society",
  언론: "society",
  지역: "society",
  인물: "society",
  "사회 일반": "society",

  // 기술
  모바일: "tech",
  "인터넷/SNS": "tech",
  "통신/뉴미디어": "tech",
  "IT 일반": "tech",
  "보안/해킹": "tech",
  컴퓨터: "tech",
  "게임/리뷰": "tech",
  "과학 일반": "tech",

  // 세계
  "아시아/호주": "world",
  "미국/중남미": "world",
  유럽: "world",
  "중동/아프리카": "world",
  "세계 일반": "world",
};

// 대분류 카테고리와 이미지 매핑
const categoryImageMap: { [key: string]: string } = {
  economy,
  rights,
  tech,
  politics,
  culture,
  environment,
  labor,
  life,
  society,
  world,
};

// 카테고리 매핑에 따른 이미지 가져오기 함수
export const getImage = (categories: string[]): string[] => {
  return categories.map((category) => {
    const mainCategory = categoryMapping[category]; // 세부 카테고리를 대분류로 매핑
    return categoryImageMap[mainCategory]; // 대분류에 맞는 이미지가 없으면 기본 이미지
  });
};
