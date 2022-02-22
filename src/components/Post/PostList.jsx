import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="mx-auto max-w-3xl">
      <ul className="">
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              className="bg-neutral-700 hover:bg-neutral-600 p-6 mb-4 rounded"
            >
              <Link href={`/blog/${post.id}`}>
                <a>
                  <div className="text-xl mb-2">{post.title}</div>
                  <div className="text-right">{post.createdAt}</div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
