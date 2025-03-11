"use server";

import CommentMongoModel from "@/mongo-schema/CommentMongoSchema";
import CommentZodSchema from "@/zod-schema/CommentZodSchema";
import { auth } from "~/auth";

const addComment = async (formdata: FormData) => {
  const session = await auth();

  const starsFrom = formdata.get("stars");
  let stars: number = 0;
  if (typeof starsFrom == "string") {
    stars = parseInt(starsFrom || "");
  }

  else {
    console.log("Value not string");
    return;
  }

  const form = CommentZodSchema.safeParse({ comment: formdata.get("comment"), stars: stars, postid: formdata.get("postid"), commentAuthor: session?.user?.id });

  if (form.success) {
    try {
      console.log(form);
      await CommentMongoModel.create(form.data);
    }

    catch (err) {
      console.log("Error In Asking Question (DB Error): \n", err);
      return;
    }
  }

  else {
    console.log("Error in asking question! (Zod Error)");
    return;
  }

  // revalidatePath(`/${session?.user?.email}`);
}

export default addComment;