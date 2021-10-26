/** @format */

const postsModel = require("../Models/postsModel.js");

const createPosts = async (req, res) => {
  const {
    title,
    categories,
    description,
    userId,
    universityOfCreator,
    selectedFiles,
  } = req.body;

  const newPost = new postsModel({
    title: title,
    categories: categories,
    description: description,
    userId: userId,
    universityOfCreator: universityOfCreator,
    selectedFiles: selectedFiles,
  });

  await newPost
    .save()
    .then(() => res.status(201).json(newPost))
    .catch((err) => res.status(409).json({ message: err.message }));
};

module.exports = createPosts;
