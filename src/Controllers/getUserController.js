/** @format */

const User = require("../models/UserModel.js");

const getUserById = async (req, res, next) => {
  User.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ message: err.message }));
};
const getUser = async (req, res, next) => {
  User.find()
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ message: err.message }));
};

module.exports = { getUser, getUserById };
