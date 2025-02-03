import GithubSignInComp from "@/components/register/GithubSignInComp";
import GoogleSignInComp from "@/components/register/GoogleSignInComp";
import { auth } from "~/auth";

const RegisterPage: React.FC = () => {
  return (
    <main className="absolute inset-0 p-2 flex flex-col gap-6 justify-center items-center text-center gradient">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl"><span className="highlight">Verdict</span></h1>
        <h2>Welcome To the World Of Opinions</h2>
      </div>
      <div className="flex flex-row gap-2">
        <GithubSignInComp />
        <GoogleSignInComp />
      </div>
    </main>
  );
};

export default RegisterPage;