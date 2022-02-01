/** @format */

const User = require("../Models/UserModel.js");

const getUserByUsername = async (req, res, next) => {
  User.findOne({ username: req.params.username })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ message: err.message }));
};
const getUser = async (req, res, next) => {
  User.find()
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ message: err.message }));
};

module.exports = { getUser, getUserByUsername };
