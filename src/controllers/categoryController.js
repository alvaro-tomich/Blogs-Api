const categoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await categoryServices.createCategory(name);

    res.status(201).json(newCategory);
};

const getCategories = async (_req, res) => {
    const categories = await categoryServices.getCategories();

    res.status(200).json(categories);
};

module.exports = { createCategory, getCategories };