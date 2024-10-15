const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const { userVerification } = require("../middleware/AuthMiddleware");

const validateUserRegistration = (req, res) => {
  const {
    username,
    password,
    userType,
    grade,
    district,
    school,
    specialEducation,
  } = req.body;

  if (!userType) {
    return res.status(400).json({ msg: "Please complete all fields" });
  }
  if (userType === "student") {
    if (
      !username ||
      !password ||
      !grade ||
      !district ||
      !school ||
      !specialEducation
    ) {
      return res.status(400).json({ msg: "Please complete all fields" });
    }
  } else {
    if (!username || !password || !district || !school) {
      return res.status(400).json({ msg: "Please complete all fields" });
    }
  }
};

// Register Route
router.post("/register", async (req, res) => {
  const {
    username,
    password,
    userType,
    grade,
    district,
    school,
    avatar,
    specialEducation,
    children,
  } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    if (!username && !password && !userType) {
      return res.status(400).json({ msg: "Please complete all fields" });
    }

    validateUserRegistration(req, res);

    user = new User({
      username,
      password,
      userType,
      grade,
      district,
      school,
      avatar,
      specialEducation,
      children,
      createdAt: new Date(),
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
    return res.status(200).json({ message: "user successfully registered!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.get("/registerUsername", async (req, res) => {
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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password" });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
    return res.status(200).json({ message: "user successfully logged in!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/logout", (req, res) => {
  // TODO
  return res.status(200).json({ message: "Logged out" });
});

router.post("/", userVerification);

module.exports = router;
