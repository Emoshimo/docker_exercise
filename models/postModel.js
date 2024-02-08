const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Post must have a title"],
  },
  body: {
    type: String,
    required: [true, "Post must have a body"],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    ref: "User",
    required: [true, "Post must have an author"],
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
