// server/models/User.js
const mongoose = require("mongoose");
const { CourseTagEnum } = require("../util/enums");

const options = { discriminatorKey: "user" };

const UserSchema = new mongoose.Schema(
  {
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
    createdAt: {
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date,
      default: this.createdAt,
    },
    avatar: {
      type: String,
    },
  },
  options
);

const StudentUserSchema = new mongoose.Schema(
  {
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
      required: true,
    },
    school: {
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
        dateCompleted: Date,
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
  },
  options
);

const EducatorUserSchema = new mongoose.Schema(
  {
    district: {
      type: String,
      rewuired: true,
    },
    school: {
      type: String,
    },
    students: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        relationship: String,
      },
    ],
    blacklistedTags: [
      {
        type: String,
        enum: CourseTagEnum,
      },
    ],
  },
  options
);

const AdministratorUserSchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    students: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        relationship: String,
      },
    ],
    blacklistedTags: [
      {
        type: String,
        enum: CourseTagEnum,
      },
    ],
  },
  options
);

const ParentUserSchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    students: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        relationship: String,
      },
    ],
    blacklistedTags: [
      {
        type: String,
        enum: CourseTagEnum,
      },
    ],
  },
  options
);

const User = mongoose.model("User", UserSchema);
const StudentUser = User.discriminator("StudentUser", StudentUserSchema);
const EducatorUser = User.discriminator("EducatorUser", EducatorUserSchema);
const AdministratorUser = User.discriminator(
  "AdministratorUser",
  AdministratorUserSchema
);
const ParentUser = User.discriminator("ParentUser", ParentUserSchema);

module.exports = {
  User,
  StudentUser,
  AdministratorUser,
  EducatorUser,
  ParentUser,
};
