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
  bannerImgName: {
    type: String,
    default: "My wedding essential",
  },
  bannerImgPath: {
    type: String,
    default: "https://unsplash.com/photos/M2T1j-6Fn8w",
  },
  bannerImgPublicId: String,
  date: String,
  story: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed. Porta lorem mollis aliquam ut. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Nunc aliquet bibendum enim facilisis.",
  },
  events: [
    {
      id: String,
      name: { type: String, default: "Ceremony" },
      location: { type: String, default: "Church of Love" },
      time: { type: String, default: "8am" },
      description: {
        type: String,
        default:
          "Lorem ipsum dolor sit amet. Cras pulvinar mattis nunc sed. Justo laoreet sit amet cursus sit amet.",
      },
    },
  ],
  dresscode: {
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet. Cras pulvinar mattis nunc sed. Justo laoreet sit amet cursus sit amet.",
    },
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
      default: "formal"
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
});

const Wedding = mongoose.model("Wedding", weddingSchema);
module.exports = Wedding;
