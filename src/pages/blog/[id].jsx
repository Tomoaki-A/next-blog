import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "src/utils/client";

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});

  const useFetchArticle = async () => {
    if (router.query.id) {
      const data = await client.get({
        endpoint: `posts`,
        contentId: router.query.id,
      });
      setArticle(data);
    }
  };

  useEffect(() => {
    useFetchArticle();
  }, [router]);

  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <div>{article.body}</div>
    </div>
  );
};

export default Article;
