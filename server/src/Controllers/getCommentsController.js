/** @format */

const commentsModel = require("../Models/commentsModel.js");
const postsModel = require("../Models/postsModel.js");

const getCommentsByPost = async (req, res, next) => {
  try {
    const post = await postsModel.findById(req.params.id);
    const comments = await commentsModel.find({ postId: post._id });
    res.status(200).json(comments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = getCommentsByPost;
