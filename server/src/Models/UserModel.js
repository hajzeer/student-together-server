/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      require: true,
      maxlength: 40,
    },
    speciality: {
      type: String,
      require: true,
      maxlength: 40,
    },
    degreeOfStudy: {
      type: String,
      require: true,
    },
    term: {
      type: Number,
      require: true,
      maxlength: 1,
    },
    city: {
      type: String,
      maxlength: 40,
    },
    description: {
      type: String,
      maxlength: 1000,
    },
    selectedFiles: {
      type: [String],
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
