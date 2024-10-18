const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  earnedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("Story", StorySchema);
