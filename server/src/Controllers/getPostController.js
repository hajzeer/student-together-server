/** @format */

const userModel = require("../models/UserModel");
const postsModel = require("./../Models/postsModel");

//get All posts
const getPosts = async (req, res, next) => {
  postsModel
    .find()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(404).json({ message: err.message }));
};

//get One Post by ID
const getOnePost = async (req, res, next) => {
  postsModel
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ message: err.message }));
};

//get user's all posts
const getPostsByUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.params.userName });
    const posts = await postsModel.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getPosts, getOnePost, getPostsByUser };
