const mongoose = require("mongoose");
const emojiSchema = new mongoose.Schema({
  slug: { type: String },
  character: { type: String },
  unicodeName: { type: String },
  codePoint: { type: String },
  group: { type: String },
  subGroup: { type: String },
});
module.exports = mongoose.model("emojies", emojiSchema);
