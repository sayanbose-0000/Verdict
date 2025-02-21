"use server";

import UserMongoModel from "@/mongo-schema/UserMongoModel";
import dbConnect from "./dbConnect";

const userExistsinDB = async (slug: string): Promise<boolean> => {
  await dbConnect();

  const email = decodeURIComponent(slug);

  const UserDoc = await UserMongoModel.findOne({ email });

  if (UserDoc) {
    return true
  }

  return false;
};

export { userExistsinDB };