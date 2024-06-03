import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Article {id}</h1>
      <NavigationBar />
    </div>
  );
};

export default Article;
