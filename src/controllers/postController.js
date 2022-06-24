const postServices = require('../services/postServices');

const createPost = async (req, res) => {
    const { id } = res.locals.users;
    const { title, content, categoryIds } = req.body;
    const post = await postServices.createPost(title, content, id, categoryIds);

    if (!post) return res.status(400).json({ message: '"categoryIds" not found' });

    res.status(201).json(post);
};

const getPosts = async (_req, res) => {
    const posts = await postServices.getPosts();

    res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await postServices.getPostById(parseInt(id, 10));

    if (!post) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(post);
};

module.exports = { createPost, getPosts, getPostById };
