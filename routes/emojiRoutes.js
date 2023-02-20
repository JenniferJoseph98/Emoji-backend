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

emojiRoutes.get("/", (req, res) => {
  res.send("Emoji Routes Working");
});
module.exports = emojiRoutes;
