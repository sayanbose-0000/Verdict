import { signInWithGithub } from "@/lib/register";
import Image from "next/image";

const GithubSignInComp = () => {
  return (
    <form action={signInWithGithub}>
      <button>
        <Image src="/icons/github-icon.svg" height={25} width={25} alt="Github"></Image>
      </button>
    </form>
  );
};

export default GithubSignInComp;