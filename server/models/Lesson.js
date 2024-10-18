const mongoose = require("mongoose");
const { CourseTagEnum, AgeGroupEnum } = require("../util/enums");

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: CourseTagEnum,
      required: true,
    },
  ],
  ageGroup: [
    {
      type: AgeGroupEnum,
      required: true,
    },
  ],
});
module.exports = mongoose.model("Lesson", LessonSchema);
