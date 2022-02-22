import Link from "next/link";
import Image from "next/image";

const PostList = ({ posts }) => {
  return (
    <ul className="flex flex-wrap  gap-8 ">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <a>
                <div className="text-xl">{post.title}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
