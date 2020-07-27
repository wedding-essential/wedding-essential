const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  imageUrl: { type: String, required: true },
  public_id:String,

  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
})

const Picture = mongoose.model('Picture', PictureSchema);
module.exports = Picture;