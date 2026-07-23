import express from "express";
import tasks from "./routes/tasks.js";
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

//middleware
app.use(express.json());

//routes
app.get(`/hello`, (req, res) => res.send("Task Manager App"));

app.use("/api/v1/tasks", tasks);

//app.get('/api/v1/tasks')        - get all the tasks
//app.post('/api/v1/tasks')       - create a new task
//app.get('/api/v1/tasks/:id')    - get single task
//app.patch('/api/v1/tasks/:id')  - update task
//app.delete('/api/v1/tasks/:id') - delete task

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
