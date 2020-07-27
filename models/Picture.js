const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  imageUrl: { type: String, required: true },
  imgPath: { type: String, required: true },
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
})

const Picture = mongoose.model('Picture', PictureSchema);
module.exports = Picture;