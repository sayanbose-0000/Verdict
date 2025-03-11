import { z } from "zod";

const CommentZodSchema = z.object({
  comment: z
    .string({ message: "Please enter a string" })
    .min(1, { message: "Please provide a question" }),

  stars:
    z.number({ message: "Please enter a number" })
      .lte(5, "Number less than equal to 5")
      .gte(1, "Number greater than equal to 1"),

  postid: z
    .string({ message: "Post Id must be a string" })
    .min(1, { message: "Post Id must be provided" }),

  commentAuthor: z
    .string({ message: "Comment Author must be a string" })
    .optional()
    // .min(1, { message: "Comment Author must be provided" })
});

export default CommentZodSchema;