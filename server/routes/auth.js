const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const {
  User,
  StudentUser,
  AdministratorUser,
  EducatorUser,
  ParentUser,
} = require("../models/User");
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
    if (!username || !password || !grade || !district || !school) {
      return false;
    }
  } else if (userType == "educator") {
    if (!username || !password || !district || !school) {
      return false;
    }
  } else {
    if (!username || !password || !district) {
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
    students,
  } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (!username && !password && !userType) {
      return res.status(400).json({ message: "Please complete all fields" });
    }

    if (username.length > 25) {
      return res.status(400).json({
        message: "Username too long. Please choose a shorter username",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password too short. Please choose a longer password",
      });
    }

    if (validateUserRegistration(req) == false) {
      return res.status(400).json({ message: "Please complete all fields" });
    }

    if (userType == "student") {
      user = new StudentUser({
        username,
        password,
        grade,
        district,
        school,
        avatar,
        specialEducation,
        createdAt: new Date(),
      });
    } else if (userType == "parent") {
      user = new ParentUser({
        username,
        password,
        district,
        students,
        createdAt: new Date(),
      });
    } else if (userType == "administrator") {
      user = new AdministratorUser({
        username,
        password,
        district,
        students,
        createdAt: new Date(),
      });
    } else if (userType == "educator") {
      user = new EducatorUser({
        username,
        password,
        district,
        students,
        school,
        createdAt: new Date(),
      });
    }

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
    return res.status(200).json({ message: "User successfully registered!" });
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
      return res.status(400).json({ message: "User not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
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
    return res.status(200).json({ message: "User successfully logged in!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// TODO: hit this route on logout
router.get("/logout/:id", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.id });

    if (!user) {
      return res.status(404).json({ message: "Could not find user" + err });
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
    return res.status(200).json({ message: "User logged out successfully!" });
  } catch (err) {
    return res.status(400).json({ message: "Error logging out" + err });
  }
});

router.post("/", userVerification);

module.exports = router;
