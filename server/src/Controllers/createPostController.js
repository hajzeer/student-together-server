const postsModel =  require('../Models/postsModel.js');

const createPosts = async (req, res) => {
    const title = req.body.title;
    const categories = req.body.categories;
    const description = req.body.description;
    const creator = req.body.creator;
    const selectedFiles = req.body.selectedFiles;


    const newPost = new postsModel({
        title,
        categories,
        description,
        creator,
        selectedFiles});

        await newPost.save()
            .then(() => res.status(201).json(newPost))
            .catch(err => res.status(409).json({message: err.message}));
}

module.exports = createPosts;