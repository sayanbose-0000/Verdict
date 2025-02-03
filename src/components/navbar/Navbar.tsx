import Image from "next/image";
import Link from "next/link";
import { auth } from "~/auth";

const Navbar: React.FC = async () => {
  const users = await auth();

  return (
    <nav className="flex justify-between items-center m-2">
      <Link href={"/"} className="text-2xl highlight font-bold">Verdict</Link >
      <div className="flex gap-2">
        <Link href={"/create"}>
          <Image src="/icons/plus-circle.svg" height={30} width={30} alt="Create" />
        </Link>

        <Link href={`/${users?.user?.email}`}>
          {users?.user?.image ?
            <Image src={users?.user?.image} height={30} width={30} alt="Profile" className="rounded-full" />
            :
            <Image src="/icons/user.svg" height={30} width={30} alt="Profile" className="rounded-full" />
          }
        </Link>
      </div>
    </nav>
  );
};


export default Navbar;