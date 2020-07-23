const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weddingSchema = new Schema({
  passcode: String,
  gallery: [
    {
      imgName: String,
      imgPath: String,
      imgPublicId: String,
    },
  ],
  bannerImgName: String,
  bannerImgPath: String,
  bannerImgPublicId: String,
  date: String,
  story: String,
  events: [
    {
      name: String,
      location: String,
      time: String,
      description: String,
    },
  ],
  dresscode: {
    description: String,
    category: {
      type: String,
      enum: [
        "other",
        "blacktie",
        "formal",
        "semi-formal",
        "festive",
        "casual",
        "tropical",
      ],
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  guests: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  contact: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  gifts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gift",
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Wedding = mongoose.model("Wedding", weddingSchema);
module.exports = Wedding;
