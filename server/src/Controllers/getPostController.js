/** @format */

const postsModel = require("./../Models/postsModel");

const getPosts = async (req, res, next) => {
  postsModel
    .find()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(404).json({ message: err.message }));
};

const getOnePost = async (req, res, next) => {
  postsModel
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ message: err.message }));
};

module.exports = { getPosts, getOnePost };
