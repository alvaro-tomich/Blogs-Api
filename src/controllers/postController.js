const postServices = require('../services/postServices');

const createPost = async (req, res) => {
    const { id } = res.locals.users;
    const { title, content, categoryIds } = req.body;
    const post = await postServices.createPost(title, content, id, categoryIds);

    if (!post) return res.status(400).json({ message: '"categoryIds" not found' });

    res.status(201).json(post);
};

module.exports = { createPost };
