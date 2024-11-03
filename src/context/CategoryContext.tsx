import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

interface CategoryContextType {
  selectedCategories: string[];
  handleCategorySelection: (category: string, isSelected: boolean) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [selectedCategories, setSelectedCategory] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
  }, [selectedCategories]);

  const handleCategorySelection = (category: string, isSelected: boolean) => {
    setSelectedCategory((current) =>
      isSelected
        ? [...current, category]
        : current.filter((t) => t !== category)
    );
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategories, handleCategorySelection }}
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
