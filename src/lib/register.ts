"use server";

import { signIn } from "~/auth";

const signInWithGithub = async () => {
  await signIn("github");
};

const signInWithGoogle = async () => {
  await signIn("google");
};

export { signInWithGithub, signInWithGoogle };