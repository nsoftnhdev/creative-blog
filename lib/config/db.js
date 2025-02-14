import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://creative:creative123@cluster0.nnlyy.mongodb.net/creative-blog")
  console.log("DB Connected");
}