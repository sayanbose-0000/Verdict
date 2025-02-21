import { logOutFromApp } from "@/lib/register";

const LogOutComp = () => {
  return (
    <form action={logOutFromApp}>
      <button type="submit" className="bg-red-700 px-3 py-2 rounded-full mt-4 hover:scale-110 duration-150">Logout</button>
    </form>
  );
};

export default LogOutComp;