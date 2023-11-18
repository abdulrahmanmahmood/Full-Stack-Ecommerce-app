import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Invalid environment variable: MONGO_URI");
}

export const dbConnect = async