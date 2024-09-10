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

const categoryImageMap = {
  경제: economy,
  인권: rights,
  기술: tech,
  정치: politics,
  문화: culture,
  환경: environment,
  노동: labor,
  생활: life,
  사회: society,
  세계: world,
};

export const getImage = (categories: string[]): string[] => {
  return categories.map(
    (category) => categoryImageMap[category] || categoryImageMap["default"]
  );
};
