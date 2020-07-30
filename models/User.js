const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: {type: String, default: "Your First Name"},
  lastName: {type: String, default: "Your Last Name"},
  partnerFirstName: {type: String, default: "Your First Name"},
  partnerLastName: {type: String, default: "Your Last Name"},
  imgName: { type: String, default: "Happy Couple" },
  imgPath: { type: String, default: "https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80" },
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
