"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log(title)
  console.log(body)

  // insert into db
  await prisma.post.create({
    data:{
      title,
      body
    }
  })

  // Revalidate 
  revalidatePath("/posts")
}
