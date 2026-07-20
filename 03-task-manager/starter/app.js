import express from "express";
const app = express();

console.log("Task Manager App");

app.listen("5000", () => {
  console.log("listening on port 5000");
});
