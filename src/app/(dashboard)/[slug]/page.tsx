import { userExistsinDB } from "@/lib/userExistsinDB";
import QuestionMongoModel from "@/mongo-schema/QuestionMongoModel";
import UserMongoModel from "@/mongo-schema/UserMongoModel";
import { notFound } from "next/navigation";
import { auth } from "~/auth";

export const generateMetadata = async () => {
  const session = await auth();

  return {
    title: `Verdict- ${session?.user?.email ? session?.user?.email : "Guest"}`,
    description: 'DashBoard for Verdict'
  };
};

const DashBoardPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  console.log(slug);

  if (!await userExistsinDB(slug)) return notFound();

  const user = await UserMongoModel.find({ email: decodeURIComponent(slug) });

  let data: any[] = [];
  if (user) {
    data = await QuestionMongoModel.find({ author: user[0]._id }).populate("author"); // gets the author data too using objectId
  }

  return (
    <>
      <main className="p-2">
        <div className="flex flex-row flex-wrap justify-center items-center">
          {data.map(item => (
            <p key={item.id} className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg">{item.question}</p>
          ))}

          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
          <p className="w-24 h-10 overflow-hidden text-ellipsis border m-2 p-2 border-gray-500 rounded-lg flex-wrap">wfeiwgnjnioejnrbjefs</p>
        </div>
      </main>
    </>
  );
};

export default DashBoardPage;