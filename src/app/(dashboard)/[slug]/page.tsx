import { userExistsinDB } from "@/lib/userExistsinDB";
import QuestionMongoModel from "@/mongo-schema/QuestionMongoModel";
import UserMongoModel from "@/mongo-schema/UserMongoModel";
// import { Types, ObjectId } from "mongoose";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "~/auth";

export const generateMetadata = async () => {
  const session = await auth();

  return {
    title: `Verdict- ${session?.user?.email ? session?.user?.email : "Guest"}`,
    description: 'DashBoard for Verdict'
  };
};

// type TData = {
//   _id: Types.ObjectId,
//   question: string,
//   author: {
//     _id: Types.ObjectId,
//     userId: string,
//     username: string,
//     email: string,
//     dp: string,
//     createdAt: Date,
//     updatedAt: Date,
//     __v: number
//   },
//   createdAt?: Date,
//   updatedAt?: Date,
//   __v: number
// }[];

const DashBoardPage = async ({ params }: { params: Promise<{ slug: string }> }) => { // gets email from the url (ie, it gets the params in url)
  const { slug } = await params;
  console.log(slug);

  if (!await userExistsinDB(slug)) return notFound();

  const user = await UserMongoModel.find({ email: decodeURIComponent(slug) });

  if (user.length == 0) return notFound();

  let data: any[] = await QuestionMongoModel.find({ author: user[0]._id }).populate("author").lean();

  return (
    <>
      <main className="p-2">
        <div className="flex flex-row flex-wrap justify-center items-center">
          {data.map(item => (
            <Link href={`/${item.author.email}/${item._id}`} key={item._id.toString()} className="border w-96 h-44 m-2 overflow-scroll overflow-x-hidden rounded-lg border-gray-500 flex flex-col hover:scale-105 transition-transform">
              <p className="p-3 text-center flex-grow flex justify-center items-center">{item.question}</p>
              <div className="flex flex-col justify-between sticky inset-0 backdrop-blur-sm p-2 rounded-b-lg text-right">
                <p className="text-zinc-300 text-xs overflow-hidden text-ellipsis text-nowrap">{item.author.username}</p>
                <p className="text-zinc-300 text-xs overflow-hidden text-ellipsis text-nowrap">{`(${item.author.email})`}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default DashBoardPage;