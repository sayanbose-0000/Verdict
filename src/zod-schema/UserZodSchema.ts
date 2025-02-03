import { z } from "zod";

const UserZodSchema = z.object({
  id: z
    .string({ message: "Id must be provided" })
    .min(1, { message: "Id must be provided" }),

  name: z
    .string({ message: "Username must be provided" })
    .min(1, { message: "Id must be provided" }),

  email: z
    .string({ message: "Email must be provided" })
    .min(1, { message: "Id must be provided" })
    .email({ message: "Email must be provided" }),

  image: z
    .string({ message: "Image must be provided" })
    .min(1, { message: "Id must be provided" })
    .url({ message: "Image must be an url" })
});

export default UserZodSchema;