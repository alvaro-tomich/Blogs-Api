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

module.exports = { createPost, getPosts, getPostById };
