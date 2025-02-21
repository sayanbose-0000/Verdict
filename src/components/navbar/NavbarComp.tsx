import Image from "next/image";
import Link from "next/link";
import { auth } from "~/auth";

const NavbarComp = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center p-2 py-5 h-8 sticky inset-0 z-20 backdrop-blur-sm">
      <Link href={`/${session?.user?.email}`} className="text-xl  font-bold">Verdict</Link >
      <div className="flex gap-2 justify-center items-center">

        {session?.user?.email &&
          <Link href={`/${session.user.email}/create`}>
            <Image src="/icons/plus-circle.svg" height={25} width={25} alt="Create" />
          </Link>
        }

        {session?.user?.image ?
          <Link href={`/settings`}>
            <Image src={"/icons/settings.svg"} height={22.5} width={22.5} alt="Profile" className="rounded-full" />
          </Link>
          :
          <Link href="/register">
            <Image src="/icons/login.svg" height={23} width={23} alt="Profile" className="rounded-full" />
          </Link>
        }
      </div>
    </nav>
  );
};

export default NavbarComp;