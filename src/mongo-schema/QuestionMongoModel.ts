import { model, Model, models, Schema, Types } from "mongoose";

interface QuestionMongoInterface {
  question: string,
  author: Types.ObjectId;
}

const QuestionMongoSchema: Schema<QuestionMongoInterface> = new Schema({
  question: {
    type: String,
    required: [true, "Question is required"]
  },
  
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Verdict-Users',
    required: [true, "Author is required"]
  }
}, { timestamps: true });

const QuestionMongoModel: Model<QuestionMongoInterface> = models["Verdict-Questions"] as Model<QuestionMongoInterface> || model<QuestionMongoInterface>("Verdict-Questions", QuestionMongoSchema);

export default QuestionMongoModel;