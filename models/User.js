const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: {type: String, default: "Hans"},
  lastName: {type: String, default: "Hansen"},
  partnerFirstName: {type: String, default: "Gretel"},
  partnerLastName: {type: String, default: "Gretelsen"},
  imgName: { type: String, default: "Happy Couple" },
  imgPath: { type: String, default: "https://unsplash.com/photos/ZsPlbTxFosA" },
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
  plusOnes: [
    {
      type: Schema.Types.ObjectId,
      ref: "PlusOne",
    },
  ],
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
