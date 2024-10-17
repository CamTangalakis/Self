// server/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["student", "educator", "administrator", "parent", "other"],
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
  badges: {
    type: Array,
    defualt: [],
  },
  stickers: {
    type: Array,
    default: [],
  },
  journal: {
    type: Array,
    default: [],
  },
  tunes: {
    type: Array,
    defualt: [],
  },
  stories: {
    type: Array,
    default: [],
  },
  favoritedCourses: {
    type: Array,
    default: [],
  },
  blacklistedTags: {
    type: Array,
    default: [],
  },
  students: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
