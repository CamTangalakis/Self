const mongoose = require("mongoose");

const TuneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
  audio: {
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
module.exports = mongoose.model("Tune", TuneSchema);
