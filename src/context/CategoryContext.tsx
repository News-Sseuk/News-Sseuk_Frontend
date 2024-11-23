import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { fetchUserPrefers } from "../api/user-controller";

interface CategoryContextType {
  selectedCategories: string[];
  handleCategorySelection: (category: string, isSelected: boolean) => void;
  updateCategories: (categories: string[]) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [selectedCategories, setSelectedCategory] = useState<string[]>([]);
  const location = window.location.pathname;
  //첫 로드 시 - api 호출로 가져오기
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchUserPrefers();
        if (data && data.result) {
          setSelectedCategory(data.result);
        }
      } catch {
        alert("아직 카테고리를 설정하지 않았어요. 카테고리를 설정해주세요!");
      }
    };
    if (location !== "/") loadCategories();
  }, []);

  const handleCategorySelection = (category: string, isSelected: boolean) => {
    setSelectedCategory((current) =>
      isSelected
        ? [...current, category]
        : current.filter((t) => t !== category)
    );
  };

  const updateCategories = (newCategories: string[]) => {
    setSelectedCategory(newCategories);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategories, handleCategorySelection, updateCategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};
