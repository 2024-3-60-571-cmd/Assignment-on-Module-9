const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");

// Create
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  const result = await student.save();
  res.send(result);
});

// Get All
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Get One
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  const deleted = await Student.findByIdAndDelete(req.params.id);
  res.send(deleted);
});

module.exports = router;