import Link from "next/link";
import React, { Suspense } from "react";

// Custom Components 
import PostLists from "@/components/Post-lists";
import Form from "@/components/Form";

const Posts = async () => {

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostLists/>
      </Suspense>
    </main>
  );
};

export default Posts;
