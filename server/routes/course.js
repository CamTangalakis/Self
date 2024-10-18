const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const Lesson = require("../models/Lesson");

// create courses by adding lessons to the Lesson array and associated tags to Tags array
router.post("/create", async (req, res) => {
  const { title, description, lessons } = req.body;

  try {
    if (!title || !description) {
      return res.status(400).json({ message: "Please complete all fields" });
    }

    let course = await Course.findOne({ title });
    if (course) {
      return res.status(400).json({ message: "Course already exists" });
    }

    // TODO: filter through lessons, grab ageGroups and tags and add to course values
    let ageGroup = [];
    let tags = [];
    lessons.forEach(async (id) => {
      const lesson = await Lesson.findById(id);
      ageGroup.push(...lesson.ageGroup[0]);
      tags.push(...lesson.tags[0]);
    });

    course = new Course({
      title,
      description,
      lessons,
      ageGroup,
      tags,
      createdAt: new Date(),
    });

    await course.save();
    return res.status(200).json({ message: "Course created" });
  } catch (err) {
    return res.status(400).json({ message: "Could not create course" + err });
  }
});

// edit course by adding/removing lessons and associated tags
router.post("/edit/:id", async (req, res) => {
  const { title, description, lessons } = req.body;

  try {
    await Course.findByIdAndUpdate(req.params.id, {
      title,
      description,
      ageGroup,
      lessons,
      tags,
    });

    return res.status(200).json({ message: "course updated" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "course could not be edited" + err });
  }
});

// delete courses
router.delete("/delete/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "course successfully deleted" });
  } catch (err) {
    return res.status(400).json({ message: "could not delete course" + err });
  }
});

module.exports = router;
