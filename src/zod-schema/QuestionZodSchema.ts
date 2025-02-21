import { z } from "zod";

const QuestionZodSchema = z.object({
  question: z
    .string({ message: "Please enter a string" })
    .min(1, { message: "Please provide a question" }),

  author: z
    .string({ message: "Author must be a string" })
    .min(1, { message: "Author must be provided" })
});

export default QuestionZodSchema;