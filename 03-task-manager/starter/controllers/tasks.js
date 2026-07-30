import { Task } from "../models/task.js";
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

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndReplace({ _id: taskID }, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export { getAllTasks, createTask, updateTask, deleteTask, getTask, editTask };
