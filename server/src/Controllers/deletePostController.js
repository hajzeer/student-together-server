const postsModel =  require('./../Models/postsModel');

const deletePost = async (req, res, next) => {

    postsModel.findByIdAndDelete(req.params.id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(404).json({message: err.message}));
}

module.exports = deletePost;