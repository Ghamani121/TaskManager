const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },   // Task title (Required)
  completed: { type: Boolean, default: false },  // Task status (Default: false)
});

module.exports = mongoose.model("Task", taskSchema);
