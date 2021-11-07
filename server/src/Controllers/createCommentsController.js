/** @format */

const commentsModel = require("../Models/commentsModel");

const createComment = function (req, res, next) {
  //const user = req.user;
  // if (!user) {
  //   return res.status(422).json({
  //     message: "You must sign in before you can post new comment.",
  //   });
  // }

  const { content, authorId, authorName, postId } = req.body;
  if (!content) {
    return res.status(422).json({
      message: "Comment cannot be empty.",
    });
  }

  const comment = new commentsModel({
    content: content,
    authorId: authorId,
    authorName: authorName,
    postId: postId,
    time: Date.now(),
  });

  comment.save(function (err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
};

module.exports = createComment;
