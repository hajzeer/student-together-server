/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    description: { type: String, maxlength: 1000 },
    userId: { type: String, require: true },
    universityOfCreator: { type: String, require: true },
    selectedFiles: { type: [String] },
    hashtags: { type: [String] },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

const postsModel = mongoose.model("postsModel", postSchema);

module.exports = postsModel;
