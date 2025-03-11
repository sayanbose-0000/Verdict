"use client"

import { useState } from "react";
import FiveStars from "./FiveStars";
import addComment from "@/lib/addComment";

const AddComment = ({ postid }: { postid: string }) => {
  const [currStars, setCurrStars] = useState<number>(0);
  console.log(currStars);

  return (
    <form action={addComment} className="m-4 flex flex-col">
      <FiveStars currStars={currStars} setCurrStars={setCurrStars} />
      <input type="hidden" name="stars" value={currStars} /> {/* hidden input, used to send the stars */}
      <input type="hidden" name="postid" value={postid} /> {/* hidden input, used to send the postid */}
      <input type="text" name="comment" className="bg-transparent outline-none underline_textbox mt-2 p-1" placeholder="Add a comment..." />
      <button type="submit" className="bg-green-900 py-1 px-3 rounded-full hover:scale-110 transition-all self-end mt-2">Send</button>
    </form>
  );
};

export default AddComment;