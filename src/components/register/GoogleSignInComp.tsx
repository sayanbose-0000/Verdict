import { signInWithGoogle } from "@/lib/register";
import Image from "next/image";

const GoogleSignInComp = () => {
  return (
    <form action={signInWithGoogle}>
      <button>
        <Image src="/icons/google-icon.svg" height={25} width={25} alt="Google"></Image>
      </button>
    </form>
  );
};

export default GoogleSignInComp;