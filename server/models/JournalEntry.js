const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("JournalEntry", JournalEntrySchema);
