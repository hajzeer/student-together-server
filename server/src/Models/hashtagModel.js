/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hashtagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  postId: {
    type: [String],
    required: true,
  },
});

const hashtagModel = mongoose.model("hashtagModel", hashtagSchema);

module.exports = hashtagModel;
