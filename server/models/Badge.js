const mongoose = require("mongoose");

const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  earnedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("Badge", BadgeSchema);
