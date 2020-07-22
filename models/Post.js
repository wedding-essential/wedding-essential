const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: String,
  date: String,
  guest: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  wedding: {
    type: Schema.Types.ObjectId,
    ref: "Wedding",
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
