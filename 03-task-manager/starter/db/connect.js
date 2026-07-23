import mongoose from "mongoose";

export function connectDB(connectionString) {
  mongoose.connect(connectionString);
}
