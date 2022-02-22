import classes from "./post.module.scss";

const Post = ({ article }) => {
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
