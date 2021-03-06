/** @format */

const postsModel = require("./../Models/postsModel");

const putPosts = (req, res) => {
  postsModel.findByIdAndUpdate(req.params.id).then((post) => {
    post.title = req.body.title;
    post.categories = req.body.categories;
    post.description = req.body.description;
    post.userId = req.body.userId;
    post.selectedFiles = req.body.selectedFiles;

    post
      .save()
      .then(() => res.status(200).json(post))
      .cache(() => res.status(409).json({ message: err.message }));
  });
};

const patchPost = async (req, res, next) => {
  try {
    const updateDesc = await postsModel.findByIdAndUpdate(req.params.id, {
      description: req.body.description,
    });
    res.send(updateDesc);
  } catch (err) {
    res.status(409).send(err.message);
  }
};

module.exports = { putPosts, patchPost };
