const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const path =
  "mongodb+srv://cslippert:RYcbAR1!@selfeducated.15tgt.mongodb.net/?retryWrites=true&w=majority&appName=SELfEducated";

app.use(bodyParser.json());
app.use(express.static(__dirname));

const mongoose = require("mongoose");
mongoose.connect(path);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/items", (req, res) => {
  console.log("HELOOOOOOO");
  res.json({ message: "Get all items" });
});
