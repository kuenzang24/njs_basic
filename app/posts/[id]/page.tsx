import React from "react";

// Custom Component 
import UpvoteButton from "@/components/Upvotebtn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const PostDetailsPage = async ({ params }: { params: { id: string } }) => {
  // const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const post = await res.json();

  const post = await prisma.post.findUnique({
    where:{
      id:parseInt(params.id)
    },
  })

  if(!post){
    notFound();
  }
  
  return (
    <div className="text-center px-7 pt-24">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <UpvoteButton />
    </div>
  );
};

export default PostDetailsPage;
