import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import PostList from "src/components/Post/PostList";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://next-blog1.microcms.io/api/v1/posts",{
      headers: {
        "X-MICROCMS-API-KEY": process.env.API_KEY,
      },
    });
    const posts = await res.json();
    setPosts(posts.contents);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={posts} />
    </div>
  );
}
