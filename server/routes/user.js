const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.get("/get/:id", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Could not complete request" + err });
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    let updatedUser = await User.updateOne(
      { username: req.params.id },
      { $set: req.body }
    );

    return res
      .status(200)
      .json({ message: "User profile successfully updated!", updatedUser });
  } catch (err) {
    return res.status(400).json({
      message: "User could not be updated, please try again later" + err,
    });
  }
});

router.get("/getUsername/:id", async (req, res) => {
  const username = req.params.id;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res.status(200).json({
        message: "User already exists. Please choose a unique username.",
      });
    } else {
      return res.status(200).json({ message: "Username available!" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  // TODO: verify loged in user is same as deleted user, logout user
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) =>
      res.status(400).json({ message: "Error deleting user" + err })
    );
});

module.exports = router;
