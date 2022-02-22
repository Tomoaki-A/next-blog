import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "src/utils/client";

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      console.log(router.query.id);
      const data = await client.get({
        endpoint: `posts`,
        contentId: router.query.id,
      });
      setArticle(data);
    };
    fetchArticle();
  }, [router]);

  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </div>
  );
};

export default Article;
