import Comment from "@/components/comment/Comment";
import { userExistsinDB } from "@/lib/userExistsinDB";
import QuestionMongoModel from "@/mongo-schema/QuestionMongoModel";
import UserMongoModel from "@/mongo-schema/UserMongoModel";
import { notFound } from "next/navigation";
// import { auth } from "~/auth";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string, postid: string }> }) => {
  const { postid } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await QuestionMongoModel.findById(postid).populate("author");

  return {
    title: `Verdict- ${data.question}`,
    description: 'Create Question for Verdict'
  };
};

const PostPage = async ({ params }: { params: Promise<{ slug: string, postid: string }> }) => {
  const { slug, postid } = await params;

  if (!await userExistsinDB(slug)) return notFound();

  const user = await UserMongoModel.find({ email: decodeURIComponent(slug) });

  if (user.length == 0) return notFound();

  // const session = await auth();

  // if (user[0].email !== session?.user?.email) return notFound();
  // console.log(user);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await QuestionMongoModel.findOne({ _id: postid, author: user[0]._id }).populate("author");

  if (!data) return notFound();
  // let data: any = await QuestionMongoModel.findOne({_id: postid, "author.email": decodeURIComponent(slug)}).populate("author");
  // console.log(data);

  return (
    <>
      <div className="p-4 flex flex-col justify-center items-start sticky left-0 top-10 backdrop-blur-sm">
        <p className="max-h-72 w-full overflow-x-hidden overflow-y-scroll border border-gray-500 p-2 rounded-md">{data?.question}</p>
        <div className="self-end text-xs text-zinc-300 w-full text-right mt-4">
          <p className="overflow-hidden text-ellipsis text-nowrap">{data?.author?.email}</p>
          <p className="overflow-hidden text-ellipsis text-nowrap">{data?.author?.username}</p>
        </div>
      </div>

      <Comment postid={postid} />
    </>
  );
};

export default PostPage;