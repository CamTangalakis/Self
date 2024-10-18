const express = require("express");
const router = express.Router();
const JournalEntry = require("../models/JournalEntry");

// create JournalEntry
router.post("/create", async (req, res) => {
  const { title, body } = req.body;

  try {
    if (!body) {
      return res.status(400).json({ message: "Please complete all fields" });
    }

    const journalEntry = new JournalEntry({
      title,
      body,
      createdAt: new Date(),
    });

    await journalEntry.save();
    return res.status(200).json({ message: "journal entry created" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Could not create journal entry" + err });
  }
});

// edit JournalEntry
router.post("/edit/:id", async (req, res) => {
  const { title, body } = req.body;

  try {
    const journalEntry = await JournalEntry.findByIdAndUpdate(req.params.id, {
      title,
      body,
      updatedAt: new Date(),
    });
    journalEntry.save();
    return res.status(200).json({ message: "journal entry updated" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Journal Entry could not be edited" + err });
  }
});

// delete JournalEntry
router.delete("/delete/:id", async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "Journal Entry successfully deleted" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "could not delete Journal Entry" + err });
  }
});

module.exports = router;
