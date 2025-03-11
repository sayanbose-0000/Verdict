import CommentMongoModel from "@/mongo-schema/CommentMongoSchema";
import { Types } from "mongoose";

type TComments = {
  _id: Types.ObjectId,
  comment: string,
  stars: number,
  postid: Types.ObjectId,
  commentAuthor: {
    _id: Types.ObjectId,
    userId: string,
    username: string,
    email: string,
    dp: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
  } | null, // allow comment id to be that big thing or null
  createdAt: Date,
  updatedAt: Date,
  __v: number
}[]


const CommentSection = async ({ postid }: { postid: string }) => {
  const comments = await CommentMongoModel.find({ postid }).populate("commentAuthor").lean() as unknown as TComments;

  return (
    <div className="flex-grow m-2 p-2 flex flex-col gap-4">
      {comments.map(item => (
        <div key={item._id.toString()} className="border border-gray-500 p-2 flex flex-col">
          <p className="text-4xl tracking-widest">{"*".repeat(item.stars)}</p>

          <div className="max-h-72 w-full overflow-x-hidden overflow-y-scroll rounded-md">{item.comment}</div>
          {item.commentAuthor ?
              <div className="self-end text-xs text-zinc-300 w-56 text-right mt-4">
                <p className="overflow-hidden text-ellipsis text-nowrap">{item.commentAuthor?.username}</p>
                <p className="overflow-hidden text-ellipsis text-nowrap">{item.commentAuthor?.email}</p>
              </div>
              :
              <div className="self-end text-xs text-zinc-300 w-56 text-right mt-4">
                <p>Anonymous User</p>
              </div>
          }
        </div>
      ))}
    </div>
  );
};

export default CommentSection;