import { Model, model, models, Schema } from "mongoose";

interface UserMongoInterface {
  userId: string,
  username: string,
  email: string,
  dp: string;
}

const UserMongoSchema: Schema<UserMongoInterface> = new Schema({
  userId: {
    type: String,
    required: [true, "User Id is required"]
  },

  username: {
    type: String,
    required: [true, "Username is required"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },

  dp: {
    type: String,
    required: [true, "DP is required"]
  }
}, { timestamps: true });

const UserMongoModel: Model<UserMongoInterface> = models["Verdict-Users"] as Model<UserMongoInterface> || model<UserMongoInterface>("Verdict-Users", UserMongoSchema);

export default UserMongoModel;