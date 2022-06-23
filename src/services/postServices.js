const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');
const { Category } = require('../database/models');

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

module.exports = { createPost };
