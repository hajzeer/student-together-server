/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  content: {
    type: String,
    maxlength: 2000,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: new Date() },
});

const commentsModel = mongoose.model("commentsModel", commentsSchema);

module.exports = commentsModel;
