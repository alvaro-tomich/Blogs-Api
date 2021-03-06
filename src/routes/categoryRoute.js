const express = require('express');
const categoryController = require('../controllers/categoryController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const categoryMiddleware = require('../middlewares/categoryMiddleware');

const route = express.Router();

route.post('/categories', tokenMiddleware, categoryMiddleware, categoryController.createCategory);
route.get('/categories', tokenMiddleware, categoryController.getCategories);

module.exports = route;
