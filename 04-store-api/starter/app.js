import dotenv from "dotenv";
import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";

dotenv.config();
//async errors

const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Store Api</h1><a href='/api/v1/products'>products route</a>");
});

app.use("/api/v1/products");

//products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening to the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
