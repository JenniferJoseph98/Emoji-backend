const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const emojiRoutes = require("./routes/emojiRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
mongoose.set("strictQuery", true);
app.use(cors());

mongoose.connect(process.env.DBURL, () => {
  console.log("Mongoose connected");
});
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Working");
});
app.use("/emoji", emojiRoutes);
app.listen(8000, () => console.log("Server connected"));
