const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const config = require("./config");
const authRoutes = require("./routes/auth");
const cors = require("cors");

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
app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  console.log("HELOOOOOOO");
  res.json({ message: "Get all items" });
});
