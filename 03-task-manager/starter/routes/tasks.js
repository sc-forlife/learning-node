import express from "express";
import { getAllTasks } from "../controllers/tasks.js";
const router = express.Router();

router.route("/").get(getAllTasks);

export default router;
