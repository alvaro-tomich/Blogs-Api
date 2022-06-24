const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');
const { Category } = require('../database/models');
const { User } = require('../database/models');

const createPost = async (title, content, userId, categoryIds) => {
    const categories = await Category.findAll();
    const array = [];
    categoryIds.forEach((curr) => {
        array.push(categories.some((catId) => catId.id === curr));
    });
    if (array.some((curr) => curr === false)) return false;

    const post = await BlogPost.create({ title, content, userId });
    await categoryIds.forEach((curr) => {
        PostCategory.create({ postId: post.id, categoryId: curr });
    });

    return post;
};

const getPosts = () => 
    BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

const getPostById = async (id) => {
    const [post] = await BlogPost.findAll({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    if (!post) return false;

    return post;
};

const verifyUserPost = async (postId, userId) => {
    const verify = await BlogPost.findByPk(postId);
    if (verify !== null && verify.userId !== userId) return false;

    return true;
};

const updatePost = async (id, title, content) => {
    await BlogPost.update({ title, content }, {
        where: { id },
    });

    if (!title || !content) return false;

    const [post] = await BlogPost.findAll({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return post;
};

const deletePost = async (id) => {
    const deletedPost = await BlogPost.destroy({
        where: { id },
    });

    if (!deletedPost) return false;
    
    return true;
};

module.exports = { createPost, getPosts, getPostById, updatePost, verifyUserPost, deletePost };
