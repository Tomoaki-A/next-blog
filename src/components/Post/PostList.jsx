import Link from "next/link";

const PostList = ({posts}) => {
  return (
    <ul className="flex flex-wrap  gap-8 ">
      {posts.map((post) => {
        return (
          <li className="" key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <a>
                <div className="w-80 ">
                  <div className="h-48">
                    <img
                      className="block w-full h-full rounded-t-3xl"
                      src={post.image.url}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-bold bg-neutral-700  p-4 h-20 rounded-b-3xl">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;