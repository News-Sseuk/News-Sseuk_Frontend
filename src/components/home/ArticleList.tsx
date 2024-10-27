import ArticleCard from "../common/ArticleCard";

// article 객체 배열을 받아서
// map으로 articleCard에 뿌려주기 위한 컴포넌트
const ArticleList = () => {
  return (
    <div>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default ArticleList;
