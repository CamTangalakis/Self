const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const { userVerification } = require("../middleware/AuthMiddleware");

const validateUserRegistration = (req) => {
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
    return false;
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
      return false;
    }
  } else {
    if (!username || !password || !district || !school) {
      return false;
    }
  }
  return true;
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

    if (username.length > 25) {
      return res.status(400).json({
        message: "username too long. please choose a shorter username",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "password too short. please choose a longer password",
      });
    }

    if (validateUserRegistration(req) == false) {
      return res.status(400).json({ msg: "Please complete all fields" });
    }

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

router.get("/logout", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ message: "could not find user" + err });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: 0 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
    return res.status(200).json({ message: "user logged out successfully!" });
  } catch (err) {
    return res.status(400).json({ message: "error logging out" + err });
  }
});

router.post("/", userVerification);

module.exports = router;
