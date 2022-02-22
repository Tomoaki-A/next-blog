import Post from "src/components/Post/post";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState();

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        router.query.id
          ? `https://next-blog1.microcms.io/api/v1/posts/${router.query.id}`
          : null,
        {
          headers: {
            "X-MICROCMS-API-KEY": process.env.API_KEY,
          },
        }
      );
      if (!res.ok) {
        router.push("/404");
      }
      const article = await res.json();
      setArticle(article);
    };
    fetchArticle();
  }, [router]);

  return (
    <div>
      <Post article={article} />
    </div>
  );
};

export default Article;
