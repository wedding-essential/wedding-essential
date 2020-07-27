const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  imageUrl: { type: String, required: true },
  imgPath: { type: String, required: true },
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
})

const Gallery = mongoose.model('Gallery', GallerySchema);
module.exports = Gallery;