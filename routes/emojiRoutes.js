const emojiRoutes = require("express").Router();
const Emoji = require("../model/emojiSchema");
emojiRoutes.get("/all", async (req, res) => {
  try {
    let getEmoji = await Emoji.find();
    res.send(getEmoji);
  } catch (e) {
    res.send(e.message);
  }
});
emojiRoutes.get("/limit", async (req, res) => {
  try {
    const { skip } = req.body;
    const skipVal = (skip - 1) * 30;
    let getEmoji = await Emoji.find().skip(skipVal).limit(30);
    res.send(getEmoji);
  } catch (error) {
    res.send(error);
  }
});
emojiRoutes.get("/", (req, res) => {
  res.send("Emoji Routes Working");
});
module.exports = emojiRoutes;
