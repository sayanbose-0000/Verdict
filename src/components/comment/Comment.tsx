import AddComment from "./AddComment";
import CommentSection from "./CommentSection";

const Comment = ({ postid }: { postid: string }) => {
  return (
    <div>
      <AddComment postid={postid} />
      <CommentSection postid={postid} />
    </div>
  );
};

export default Comment;