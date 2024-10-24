const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const config = require("./config");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const userRoutes = require("./routes/user");
const journalRoutes = require("./routes/journalEntry");
const lessonRoutes = require("./routes/lesson");
const courseRoutes = require("./routes/course");
const path = require("path");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/lesson", lessonRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "Get all items" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
