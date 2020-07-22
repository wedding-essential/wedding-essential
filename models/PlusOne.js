const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plusOneSchema = new Schema({
  firstName: String,
  lastName: String,
  imgName: String,
  imgPath: String,
  imgPublicId: String,
  food: {
    type: String,
    enum: ["omnivore", "vegeterian", "vegan"],
    default: "omnivore",
  },
  age: {
    type: String,
    enum: ["adult", "child"],
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const PlusOne = mongoose.model("PlusOne", plusOneSchema);
module.exports = PlusOne;
