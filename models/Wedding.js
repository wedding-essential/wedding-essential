const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weddingSchema = new Schema({
  passcode: String,
  gallery: [
    {
      type: Schema.Types.ObjectId,
      ref: "Picture",
    },
  ],
  bannerImgName: {
    type: String,
    default: "My wedding essential",
  },
  bannerImgPath: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  bannerImgPublicId: String,
  date: {
    type: String,
    default: Date.now() + 365 * 24 * 60 * 60 * 1000,
  },
  story: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed. Porta lorem mollis aliquam ut. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Nunc aliquet bibendum enim facilisis.",
  },
  events: [
    {
      // id: String,
      name: String,
      location: String,
      time: String,
      description: String,
      
    },
  ],
  dresscode: {
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
    default: "formal",
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
    name: { type: String, default: "Pepita Perez" },
    email: { type: String, default: "popota@gmail.com" },
  },
});

const Wedding = mongoose.model("Wedding", weddingSchema);
module.exports = Wedding;
