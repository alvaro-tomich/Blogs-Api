const { Category } = require('../database/models');

const createCategory = (name) => Category.create({ name });

module.exports = { createCategory };
