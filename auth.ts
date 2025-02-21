import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";
import UserZodSchema from "@/zod-schema/UserZodSchema";
import { z } from "zod";
import UserMongoModel from "@/mongo-schema/UserMongoModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],

  callbacks: { // will work after signIn function works
    async signIn({ user }) {
      await dbConnect();

      try {
        const validUser = UserZodSchema.parse(user);
        const { id, email, image, name } = validUser;

        const UserDoc = await UserMongoModel.findOne({ email });

        if (UserDoc) {
          // return "/"; // returns to home page url
          // return { redirect: "/" };
          return true;
        };

        await UserMongoModel.create({
          userId: id,
          username: name,
          email: email,
          dp: image
        });

        // return "/"; // returns to home page url
        // return { redirect: "/" };
        return true;
      }

      catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err.issues);
        }

        else {
          console.log("Database Error: Couldn't create user");
        }

        return false;
      }
    },

    async session({ session }) {
      dbConnect();
      const UserDoc = await UserMongoModel.findOne({ email: session.user.email });
      if (UserDoc) {
        session.user.id = UserDoc._id.toString()
      }
      return session;
    }
  }
});