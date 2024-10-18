const mongoose = require("mongoose");
const { AgeGroupEnum, CourseTagEnum } = require("../util/enums");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  lessons: [
    {
      type: String,
      required: true,
    },
  ],
  ageGroup: [
    {
      type: String,
      enum: AgeGroupEnum,
      required: true,
    },
  ],
  tags: [
    {
      required: true,
      type: String,
      enum: CourseTagEnum,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
});
module.exports = mongoose.model("Course", CourseSchema);
