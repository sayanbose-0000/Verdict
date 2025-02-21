import LogOutComp from "@/components/register/LogOutComp";
import Image from "next/image";
import { notFound } from "next/navigation";
import { auth } from "~/auth";

export const generateMetadata = async () => {
  const session = await auth();

  return {
    title: `Verdict Settings- ${session?.user?.email ? session?.user?.email : "Guest"}`,
    description: 'DashBoard for Verdict'
  };
};

const SettingPage = async () => {
  const session = await auth();

  if (!session?.user?.email) return notFound();

  return (
    <main className="flex flex-col justify-center items-center absolute inset-0">
      <form className="flex flex-col gap-4 justify-center items-center w-full m-2 p-2">
        <div className="flex flex-col gap-1">
          {
            session?.user?.image &&
            <Image src={session?.user?.image} alt="dp" height={100} width={100} className="rounded-full opacity-75" priority={true} quality={1} />
          }
        </div>

        <div className="flex flex-col gap-1 w-full mb:w-auto">
          {
            session?.user?.email &&
            <>
              <label className="ml-1" htmlFor="email">Email: </label>
              <input type="text" name="email" id="email" className="px-3 py-2 disabled:bg-[#212121] text-[#b0b0b0] rounded-full w-full mb:w-72" defaultValue={session?.user?.email} disabled />
            </>
          }
        </div>

        <div className="flex flex-col gap-1 w-full mb:w-auto">
          {
            session?.user?.name &&
            <>
              <label className="ml-1" htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" className="px-3 py-2 disabled:bg-[#212121] text-[#b0b0b0] rounded-full w-full mb:w-72" defaultValue={session?.user?.name} disabled />
            </>
          }
        </div>
      </form>

      {
        session?.user?.email &&
        <LogOutComp />
      }
    </main >
  );
};

export default SettingPage;