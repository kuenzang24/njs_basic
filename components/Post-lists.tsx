import Link from "next/link";
import React from "react";
import prisma from "@/lib/db";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

const PostLists = async () => {
  // const res = await fetch("https://dummyjson.com/posts?limit=10");
  // const result = await res.json();

  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostLists;
