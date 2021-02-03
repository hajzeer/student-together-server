const postsModel =  require('./../Models/postsModel');

const putPosts = (req, res) => {
    postsModel.findByIdAndUpdate(req.params.id)
        .then(post => {
            post.title = req.body.title;
            post.categories = req.body.categories;
            post.description = req.body.description;
            post.creator = req.body.creator;
            post.selectedFiles = req.body.selectedFiles;

            post.save()
                .then(() => res.status(200).json(post))
                .cache(() => res.status(409).json({message: err.message}))
        })
}

module.exports = putPosts;