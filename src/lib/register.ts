"use server";

import { signIn, signOut } from "~/auth";

const signInWithGithub = async () => {
  await signIn("github");
};

const signInWithGoogle = async () => {
  await signIn("google");
};

const logOutFromApp = async () => {
  await signOut({ redirectTo: "/register" });
};

export { signInWithGithub, signInWithGoogle, logOutFromApp };