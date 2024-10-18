const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// create lessons
router.post("/create", async (req, res) => {
  const { title, description, tags, ageGroup } = req.body;

  try {
    if (!title || !description || !tags || !ageGroup) {
      return res.status(400).json({ message: "please fill out all fields" });
    }

    let lesson = await Lesson.findOne({ title });
    if (lesson) {
      return res.status(400).json({
        message: "lesson title already taken. please use a unique title",
      });
    }

    lesson = new Lesson({
      title,
      description,
      tags,
      ageGroup,
      createdAt: new Date(),
    });

    await lesson.save();
    return res.status(200).json({ message: "lesson created" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "lesson could not be created " + err });
  }
});

// edit lesson by adding/removing lessons and associated tags
router.post("/edit/:id", async (req, res) => {
  const { title, description, ageGroup, tags } = req.body;

  try {
    await Lesson.findByIdAndUpdate(req.params.id, {
      title,
      description,
      ageGroup,
      tags,
    });

    return res.status(200).json({ message: "lesson updated" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "lesson could not be edited" + err });
  }
});

// delete lessons
router.delete("/delete/:id", async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Lesson successfully deleted" });
  } catch (err) {
    return res.status(400).json({ message: "could not delete Lesson" + err });
  }
});

module.exports = router;
