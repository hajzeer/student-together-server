/** @format */

const hashtagModel = require("../Models/hashtagModel");
const postsModel = require("../Models/postsModel");

//create hashtags
const createHashtag = (req, res, next) => {
  const { name, postId } = req.body;

  const hashtag = new hashtagModel({
    name: name,
    postId: postId,
  });

  hashtag.save((err, hashtag) => {
    if (err) {
      return next(err);
    }
    res.json(hashtag);
  });
};

//get posts by hashtags
const getPostsByHashtag = async (req, res, next) => {
  try {
    const hashtag = await hashtagModel.findOne({ name: req.params.name });
    const posts = await postsModel.find({ postId: hashtag._id });

    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { createHashtag, getPostsByHashtag };
