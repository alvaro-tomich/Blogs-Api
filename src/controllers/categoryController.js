const categoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await categoryServices.createCategory(name);

    res.status(201).json(newCategory);
};

module.exports = { createCategory };