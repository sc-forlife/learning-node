import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import product from "./models/product.js";
import jsonProducts from "./products.json" with { type: "json" };

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await product.deleteMany();
    console.log("success !!!!");
  } catch (error) {
    console.log(error);
  }
};

start();
