import Content from "../../components/onboarding/Content";
import { CategoryProvider } from "../../context/CategoryContext";

const Onboarding = () => {
  return (
    <CategoryProvider>
      <Content />
    </CategoryProvider>
  );
};

export default Onboarding;
