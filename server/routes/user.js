const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/get", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.json(user);
  } catch (err) {
    return res
      .status(400)
      .json({ message: "could not complete request" + err });
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    let updatedUser = await User.updateOne(
      { username: req.body.username },
      { $set: req.body }
    );

    return res
      .status(200)
      .json({ message: "user profile successfully updated!", updatedUser });
  } catch (err) {
    return res.status(400).json({
      message: "user could not be updated, please try again later" + err,
    });
  }
});

router.get("/getUsername", async (req, res) => {
  const { username } = req.body;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res
        .status(200)
        .json({ msg: "User already exists. Please choose a unique username." });
    }
    return res.status(200).json({ msg: "Username available!" });
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
