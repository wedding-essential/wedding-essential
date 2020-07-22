const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  imgName: String,
  imgPath: String,
  imgPublicId: String,
  role: {
    type: String,
    enum: ["couple", "guest"],
  },
  food: {
    type: String,
    enum: ["omnivore", "vegeterian", "vegan"],
    default: "omnivore",
  },
  plusOne: [
    {
      type: Schema.Types.ObjectId,
      ref: "PlusOne",
    },
  ],
  gift: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gift",
    },
  ],
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
