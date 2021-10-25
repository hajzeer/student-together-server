/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: { type: String, require: true, minlength: 5, maxlength: 50 },
    categories: { type: String, require: true },
    description: { type: String, maxlength: 1000 },
    creator: { type: Schema.Types.ObjectId, ref: "User", require: true },
    universityOfCreator: { type: String, require: true },
    selectedFiles: { type: [String] },
    createdAt: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

const postsModel = mongoose.model("postsModel", postSchema);

module.exports = postsModel;
