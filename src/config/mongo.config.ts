import mongoose from "mongoose";

const mongoDbConnection = () => {
  try {
    mongoose.createConnection("mongodb://localhost:27017/test");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

export { mongoDbConnection }