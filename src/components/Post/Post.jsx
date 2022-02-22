import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "src/utils/client";
import classes from "./post.module.scss";

const Post = () => {
  const router = useRouter();
  const [article, setArticle] = useState();

  useEffect(() => {
    const fetchArticle = async () => {
      console.log(router.query.id);
      const data = await client.get({
        endpoint: `posts`,
        contentId: router.query.id,
      });
      setArticle(data);
      console.log(data);
    };
    fetchArticle();
  }, [router]);

  if (!article) {
    return <div></div>;
  }
  return (
    <div className={classes.textarea}>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl text-center mb-20">{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
    </div>
  );
};

export default Post;
