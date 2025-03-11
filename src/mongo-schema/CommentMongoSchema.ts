import { model, Model, models, Schema, Types } from "mongoose";

interface CommentMongoInterface {
  comment: string,
  stars: number,
  postid: Types.ObjectId
  commentAuthor: Types.ObjectId
}

const CommentMongoSchema: Schema<CommentMongoInterface> = new Schema({
  comment: {
    type: String,
    required: [true, "Comment is required"]
  },

  stars: {
    type: Number,
    required: [true, "Stars is required"]
  },

  postid: {
    type: Schema.Types.ObjectId,
    ref: 'Verdict-Questions',
    required: [true, "Post Id is required"]
  },
  
  commentAuthor: {
    type: Schema.Types.ObjectId,
    ref: 'Verdict-Users',
    default: null
    // required: [true, "Comment Author is required"]
  }
}, { timestamps: true });

const CommentMongoModel: Model<CommentMongoInterface> = models["Verdict-Comments"] as Model<CommentMongoInterface> || model<CommentMongoInterface>("Verdict-Comments", CommentMongoSchema);

export default CommentMongoModel;