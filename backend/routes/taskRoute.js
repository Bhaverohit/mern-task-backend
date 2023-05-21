const express = require("express");
const Task = require("../models/taskModel")
const {createTask, getTasks, getATask, deleteTask, updateTask} = require("../controllers/taskController")
const router = express.Router()

// Single Liners
// router.route("/").post(createTask).get(getTasks)
// router.route("/:id").get(getATask).delete(deleteTask).put(updateTask)

// Create A Task
router.post("/", createTask)

// Get/Read All Task
router.get("/", getTasks)

// Get/Read A Single Task
router.get("/:id", getATask)

// Delete A Task
router.delete("/:id", deleteTask)

// Update A Task
router.put("/:id", updateTask)
// OR
// router.patch("/api/task/:id", updateTask) // Patch is used to update single

module.exports = router;