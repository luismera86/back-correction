import mongoose from "mongoose";

const mongoDbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bc-test");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

export { mongoDbConnection }