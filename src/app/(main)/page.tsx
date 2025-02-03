import Image from "next/image";
import Link from "next/link";
import { auth } from "~/auth";

const HomePage: React.FC = async () => {
  const user = await auth();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center absolute inset-0 gap-10 text-center p-2">
      <div>
        <h1 className="text-xl">Welcome to <span className="highlight">Verdict</span></h1>
        <p className="font-bold text-4xl">{user?.user?.name}</p>
      </div>

      <Link href={`/${user?.user?.email}`} className="m-2 text-sm flex gap-2 justify-center items-center hover:scale-110 duration-500 transition-all">
        <p className="underline_text cursor-pointer">Continue to Dashboard</p>
        <Image src={"/icons/arrow-right.svg"} height={17} width={17} alt="Arrow"></Image>
      </Link>
    </main>
  );
};

export default HomePage;