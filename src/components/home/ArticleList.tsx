import ArticleCard from "../common/ArticleCard";

export interface ArticleType {
  category: string;
  description: string;
  hashTagList: string[];
  id: string;
  publishedDate: string;
  reliability: number;
  title: string;
  issue: string;
}

type ArticleListProps = {
  articleArray: ArticleType[];
};
const ArticleList = ({ articleArray }: ArticleListProps) => {
  return (
    <div>
      {articleArray?.map((article) => (
        <ArticleCard key={article.id} data={article} />
      ))}
    </div>
  );
};

export default ArticleList;
