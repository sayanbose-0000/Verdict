"use server";

import QuestionMongoModel from "@/mongo-schema/QuestionMongoModel";
import QuestionZodSchema from "@/zod-schema/QuestionZodSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "~/auth";

const submitQuestion = async (formdata: FormData) => {
  const session = await auth();

  const form = QuestionZodSchema.safeParse({ question: formdata.get("question"), author: session?.user?.id });
  console.log(form);

  if (form.success) {
    try {
      const QuestionDocument = await QuestionMongoModel.create(form.data);
    }

    catch (err) {
      console.log("Error In Asking Question: \n", err);
      return;
    }
  }

  else {
    console.log("Error in asking question!");
    return;
  }

  revalidatePath(`/${session?.user?.email}`);
  redirect(`/${session?.user?.email}`);
};

export default submitQuestion;