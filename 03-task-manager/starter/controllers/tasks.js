import { Task } from "../models/task.js";
import { CustomAPIError, createCustomError } from "../errors/custom-error.js";
import { asyncWrapper } from "../middleware/async.js";

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  // res.status(200).json({ tasks: tasks });
  // res.status(200).json({tasks:amount:tasks.length});
  // res.status(200).json({success:true , data:{tasks,nbHits: tasks.length}});
  res
    .status(200)
    .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndReplace({ _id: taskID }, req.body, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }

  res.status(200).json({ task });
});

export { getAllTasks, createTask, updateTask, deleteTask, getTask, editTask };
