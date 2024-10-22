// server/models/User.js
const mongoose = require("mongoose");
const { CourseTagEnum, UserTypeEnum } = require("../util/enums");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 25,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  userType: {
    type: String,
    enum: UserTypeEnum,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: this.createdAt,
  },
  grade: {
    type: String,
    enum: [
      "tk",
      "k",
      "1",
      "2",
      "2",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
  },
  district: {
    type: String,
  },
  school: {
    type: String,
  },
  avatar: {
    type: String,
  },
  specialEducation: {
    type: Boolean,
  },
  badges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Badge",
    },
  ],
  stickers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sticker",
    },
  ],
  journal: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JournalEntry",
    },
  ],
  tunes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sticker",
    },
  ],
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
  favoritedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  assignedCourses: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      completed: {
        type: Boolean,
        required: true,
      },
      grade: Number,
      archived: Boolean,
      priority: Number,
    },
  ],
  blacklistedTags: [
    {
      type: String,
      enum: CourseTagEnum,
    },
  ],
  students: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      relationship: String,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
