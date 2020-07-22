const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
  name: String,
  description: String,
  url: String,
  category: {
    type: String,
    enum: ["baby", "house", "kitchen", "travel", "other"],
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
});

const Gift = mongoose.model("Gift", giftSchema);
module.exports = Gift;
