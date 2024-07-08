import React from "react";
import { redirect } from "next/navigation";

// Kinde Auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Server Actions
import { createPost } from "@/actions/actions";
import Form from "@/components/Form";

const CreatePost = async () => {
  // const {isAuthenticated} = getKindeServerSession();
  // if(!(await isAuthenticated())){
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">Create post</h1>
      <Form/>
    </main>
  );
};

export default CreatePost;
