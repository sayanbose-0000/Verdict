import mongoose from "mongoose";

let isConnected: boolean = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI || "");

    if (mongoose.connection.readyState == 1) {
      isConnected = true;
    }
    
    return;
  }

  catch (err) {
    console.log("Error Connecting to db:\n", err);
    return;
  }
};

export default dbConnect;